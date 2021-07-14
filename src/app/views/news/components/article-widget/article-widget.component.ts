import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NewsModels } from '../../../../models/news-models';

@Component({
  selector: 'app-article-widget',
  templateUrl: './article-widget.component.html',
  styleUrls: ['./article-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleWidgetComponent {
  @Input() article!: NewsModels.Article;
}
