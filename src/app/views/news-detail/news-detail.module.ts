import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailComponent } from './news-detail.component';
import { RouterModule } from '@angular/router';
import { NewsDetailGuard } from './guards/news-detail.guard';
import { NewsDetailContentSectionComponent } from './components/news-detail-content-section/news-detail-content-section.component';
import { ImageUtilsModule } from '../../modules/image-utils/image-utils.module';


@NgModule({
  declarations: [NewsDetailComponent, NewsDetailContentSectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: NewsDetailComponent,
      canActivate: [NewsDetailGuard],
    }]),
    ImageUtilsModule,
  ],
})
export class NewsDetailModule {
}
