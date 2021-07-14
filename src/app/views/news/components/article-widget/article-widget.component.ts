import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-widget',
  templateUrl: './article-widget.component.html',
  styleUrls: ['./article-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleWidgetComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
