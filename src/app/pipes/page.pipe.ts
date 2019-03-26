import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `slice:${(value - 1) * 3}:${value * 3}`;
  }

}
