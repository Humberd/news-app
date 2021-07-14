import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsModels } from '../../models/news-models';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailComponent implements OnInit {
  readonly article: NewsModels.Article;

  constructor(
    router: Router,
    private commentsService: CommentsService,
  ) {
    // fixme before mr
    // this.article = router.getCurrentNavigation()?.extras.state as NewsModels.Article;
    this.article = {
      'source': {
        'id': null,
        'name': 'Page Six',
      },
      'author': 'Francesca Bacardi',
      'title': 'Catt Sadler gets COVID despite being fully vaccinated: \'Delta is relentless\' - Page Six',
      'description': '“I’m telling you this so that you understand that the pandemic is very much NOT over,” the former E! host wrote.',
      'url': 'https://pagesix.com/2021/07/14/catt-sadler-gets-covid-19-despite-being-fully-vaccinated/',
      'urlToImage': 'https://pagesix.com/wp-content/uploads/sites/3/2021/07/cat-sadler.jpg?quality=90&strip=all&w=1200',
      'publishedAt': '2021-07-14T15:51:00Z',
      'content': 'A fully vaccinated Catt Sadler revealed that she has contracted the Delta variant of COVID-19.\r\n“Im telling you this so that you understand that the pandemic is very much NOT over,” the former E! hos… [+1239 chars]',
    };
  }

  public ngOnInit() {

    // Make sure that this page can only be
    // accessible from the main News list with
    // a loaded article from 'state', if url entered
    // manually from the browser it should go back to
    // the /news view
  }

  public goToArticle(url: string): void {
    // Open original article in new tab
  }
}
