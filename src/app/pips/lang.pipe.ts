import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  transform(value,lang): any {
    if(lang=='en') {
      return value.en
    } else {
      return value.ar
    }
  }

}
