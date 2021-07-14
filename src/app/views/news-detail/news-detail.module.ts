import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailComponent } from './news-detail.component';
import { RouterModule } from '@angular/router';
import { NewsDetailGuard } from './guards/news-detail.guard';


@NgModule({
  declarations: [NewsDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: NewsDetailComponent,
      canActivate: [NewsDetailGuard],
    }]),
  ],
})
export class NewsDetailModule {
}
