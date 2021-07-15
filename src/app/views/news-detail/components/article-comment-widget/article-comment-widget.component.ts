import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommentModel } from '../../../../models/comment-models';

@Component({
  selector: 'app-article-comment-widget',
  templateUrl: './article-comment-widget.component.html',
  styleUrls: ['./article-comment-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCommentWidgetComponent {
  @Input() comment!: CommentModel;
}
