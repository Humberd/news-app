import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { BehaviorSubject, EMPTY, fromEvent, Subject } from 'rxjs';
import { debounceTime, map, startWith, switchMap, takeUntil, throttleTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { NewsModels } from '../../models/news-models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

const PAGE_SIZE = 10;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit, OnDestroy {
  lastData?: NewsModels.List.ResponseParams = undefined;
  items: NewsModels.Article[] = [];
  searchControl = new FormControl(undefined);
  alreadyFetching = false;

  trackBy = (index: number) => index;

  private readonly requestParams$ = new BehaviorSubject<NewsModels.List.RequestParams | null>(null);
  private readonly unsubscribe$ = new Subject();

  constructor(
    private newsService: NewsService,
    private changeDetectorRef: ChangeDetectorRef,
    private matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.watchForRequestParamsChange();
    this.watchSearchPhraseChange();
    this.watchAppScroll();
    this.watchQueryParamChange();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  private watchForRequestParamsChange() {
    this.requestParams$
      .pipe(
        switchMap(params => {
          if (!params) {
            return EMPTY;
          }

          this.alreadyFetching = true;
          this.changeDetectorRef.markForCheck();

          return this.newsService.readList(params).pipe(map(response => ({ response, params })));
        }),
        takeUntil(this.unsubscribe$),
      )
      .subscribe({
        next: ({ response, params }) => {
          this.lastData = response;
          if (params.pageNumber === 1) {
            this.items = response.articles;
          } else {
            this.items = this.items.concat(...response.articles);
          }
          this.alreadyFetching = false;
          this.changeDetectorRef.markForCheck();
        },
        error: error => {
          this.matSnackBar.open(`Failed to fetch articles: ${error.message || error}`, 'Dismiss', { duration: 10000 });
          this.alreadyFetching = false;
          this.changeDetectorRef.markForCheck();
        },
      });
  }

  private watchSearchPhraseChange(): void {
    this.searchControl.valueChanges
      .pipe(
        startWith(this.searchControl.value as string),
        debounceTime(300),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(searchPhrase => {
        this.requestParams$.next({ searchPhrase, pageNumber: 1, pageSize: PAGE_SIZE });
        this.updateUrl(searchPhrase);
      });
  }

  private updateUrl(searchPhrase: string): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { searchPhrase: searchPhrase || null },
        queryParamsHandling: 'merge',
      });
  }

  private watchAppScroll() {
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(128),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(() => {
        const loadOffset = 800;
        var scrolledToBottom = (document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.scrollHeight - loadOffset;

        if (!scrolledToBottom) {
          return;
        }

        if (this.alreadyFetching) {
          return;
        }

        const allItemsAreFetched = this.items.length >= (this.lastData?.totalResults ?? 0);
        if (allItemsAreFetched) {
          return;
        }

        const currentRequestParams = this.requestParams$.value;
        if (!currentRequestParams) {
          return;
        }

        this.requestParams$.next({
          ...currentRequestParams,
          pageNumber: currentRequestParams.pageNumber + 1,
        });
      });
  }

  private watchQueryParamChange() {
    this.activatedRoute.queryParamMap
      .pipe(
        map(paramMap => paramMap.get('searchPhrase')),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(searchPhrase => {
        /**
         * Handling a case where either of then can be either: null, undefined or ''
         * We don't want to accidentally trigger another request when the value was also nullish before
         * Or accidentally make an infinite loop.
         */
        if (!searchPhrase && !this.searchControl.value) {
          return;
        }

        if (searchPhrase === this.searchControl.value) {
          return;
        }

        this.searchControl.patchValue(searchPhrase);
      });
  }

}
