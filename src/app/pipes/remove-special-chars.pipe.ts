import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpecialChars'
})
export class RemoveSpecialCharsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? value.replace(/\t|\r|\n/gm, '') : '';
  }

}
