import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageSrcPipe } from './pipes/background-image-src.pipe';


@NgModule({
  declarations: [
    BackgroundImageSrcPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BackgroundImageSrcPipe,
  ],
})
export class ImageUtilsModule {
}
