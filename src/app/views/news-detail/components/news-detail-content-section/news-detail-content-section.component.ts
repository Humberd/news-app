import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NewsModels } from '../../../../models/news-models';

@Component({
  selector: 'app-news-detail-content-section',
  templateUrl: './news-detail-content-section.component.html',
  styleUrls: ['./news-detail-content-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailContentSectionComponent implements OnInit {
  @Input() article!: NewsModels.Article;

  constructor() {
  }

  ngOnInit(): void {
  }

}
