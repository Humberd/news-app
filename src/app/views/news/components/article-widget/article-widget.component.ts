import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NewsModels } from '../../../../models/news-models';

@Component({
  selector: 'app-article-widget',
  templateUrl: './article-widget.component.html',
  styleUrls: ['./article-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleWidgetComponent implements OnInit {
  @Input() article!: NewsModels.Article;

  private readonly defaultImgSrc = '/assets/images/placeholder.jpg';

  constructor() {
  }

  ngOnInit(): void {
  }

  getArticleSrc(): string {
    return `url(${this.article.urlToImage || this.defaultImgSrc})`;
  }


}
