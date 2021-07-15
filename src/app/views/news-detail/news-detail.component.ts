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
    // fixme before mr
    // this.article = router.getCurrentNavigation()?.extras.state as NewsModels.Article;
    this.article = {
      'source': {
        'id': 'the-washington-post',
        'name': 'The Washington Post',
      },
      'author': 'Alex Horton',
      'title': 'U.S. military once trained Colombians implicated in Haiti assassination plot, Pentagon says - The Washington Post',
      'description': 'The suspects received training while serving in the Colombian military, the Pentagon said.',
      'url': 'https://www.washingtonpost.com/national-security/2021/07/15/colombia-haiti-us-military/',
      'urlToImage': 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/U6F3HXNMSVDN5FXBP5ALHX27A4.jpeg&w=1440',
      'publishedAt': '2021-07-15T14:26:15Z',
      'content': 'The Pentagons review is ongoing, Hoffman said. He did not say how many of the men received training or precisely what it entailed.\r\nStory continues below advertisement\r\nSen. Patrick J. Leahy (D-Vt.),… [+4740 chars]',
    };
  }

  ngOnInit(): void {
    this.fetchComments();

    // Make sure that this page can only be
    // accessible from the main News list with
    // a loaded article from 'state', if url entered
    // manually from the browser it should go back to
    // the /news view
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
