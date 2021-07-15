import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsModels } from '../../models/news-models';
import { CommentsService } from '../../services/comments.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommentModel } from '../../models/comment-models';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  readonly article: NewsModels.Article;
  comments!: CommentModel[];

  trackBy = (index: number) => index;

  private readonly unsubscribe$ = new Subject();

  constructor(
    router: Router,
    private commentsService: CommentsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.article = router.getCurrentNavigation()?.extras.state as NewsModels.Article;
  }

  ngOnInit(): void {
    this.fetchComments();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  private fetchComments(): void {
    this.commentsService.readList()
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe(comments => {
        this.comments = comments;
        this.changeDetectorRef.markForCheck();
      });
  }

  public goToArticle(url: string): void {
    // Open original article in new tab
  }
}
