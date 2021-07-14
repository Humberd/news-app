import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subject } from 'rxjs';
import { debounceTime, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { NewsModels } from '../../models/news-models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit, OnDestroy {
  data?: NewsModels.List.ResponseParams = undefined;
  searchControl = new FormControl(undefined);

  trackBy = (index: number) => index;

  private readonly unsubscribe$ = new Subject();

  constructor(
    private newsService: NewsService,
    private changeDetectorRef: ChangeDetectorRef,
    private matSnackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.watchSearchPhraseChange();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  private watchSearchPhraseChange(): void {
    this.searchControl.valueChanges
      .pipe(
        startWith(this.searchControl.value as string),
        debounceTime(300),
        switchMap(searchPhrase => this.newsService.readList({ searchPhrase, pageNumber: 1, pageSize: 10 })),
        takeUntil(this.unsubscribe$),
      )
      .subscribe({
        next: response => {
          this.data = response;
          this.changeDetectorRef.markForCheck();
        },
        error: error => {
          this.matSnackBar.open(`Failed to fetch articles: ${error.message || error}`, 'Dismiss', { duration: 10000 });
        },
      });
  }

}
