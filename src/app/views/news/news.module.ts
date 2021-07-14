import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ArticleWidgetComponent } from './components/article-widget/article-widget.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ImageUtilsModule } from '../../modules/image-utils/image-utils.module';

@NgModule({
  declarations: [NewsComponent, ArticleWidgetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: NewsComponent,
    }]),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressBarModule,
    ImageUtilsModule,
  ],
})
export class NewsModule {
}
