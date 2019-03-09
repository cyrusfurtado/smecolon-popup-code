import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) {
      const text = value.replace(/_-/gm, ' ');
    }
  }

}
