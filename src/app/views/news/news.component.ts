import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subject } from 'rxjs';
import { debounceTime, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  public articles: any[] = [];
  searchControl = new FormControl(undefined);

  private readonly unsubscribe$ = new Subject();

  constructor(
    private newsService: NewsService,
  ) {

  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        startWith(this.searchControl.value as string),
        debounceTime(300),
        switchMap(searchPhrase => this.newsService.readList({ searchPhrase, pageNumber: 1, pageSize: 10 })),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

}
