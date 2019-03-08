import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: any, length = 20): any {
    return value ? value.substr(0, length) : '';
  }

}
