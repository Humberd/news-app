import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsDetailComponent } from './views/news-detail/news-detail.component';
import { NewsComponent } from './views/news/news.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  {
    path: 'news',
    loadChildren: () => import('./views/news/news.module').then(m => m.NewsModule),
    data: { animation: 'NewsComponent' },
  },
  {
    path: 'article',
    loadChildren: () => import('./views/news-detail/news-detail.module').then(m => m.NewsDetailModule),
    data: { animation: 'NewsDetailComponent' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
