import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) {
      const text: string = value.replace(/_|-/gm, ' ');
      return text[0].toUpperCase() + text.substring(1);
    } else  {
      return '';
    }
  }

}
