import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NewsModels } from '../../../../models/news-models';

@Component({
  selector: 'app-news-detail-content-section',
  templateUrl: './news-detail-content-section.component.html',
  styleUrls: ['./news-detail-content-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailContentSectionComponent {
  @Input() article!: NewsModels.Article;
  @Input() commentsCount!: number;
}
