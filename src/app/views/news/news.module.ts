import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: NewsComponent,
    }]),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class NewsModule {
}
