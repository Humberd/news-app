import { Pipe, PipeTransform } from '@angular/core';

const DEFAULT_IMG_SRC = '/assets/images/placeholder.jpg';


@Pipe({
  name: 'backgroundImageSrc',
})
export class BackgroundImageSrcPipe implements PipeTransform {
  transform(url: string | undefined | null): string {
    return `url(${url || DEFAULT_IMG_SRC})`;
  }
}
