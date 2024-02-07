import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPhone'
})
export class CustomPhonePipe implements PipeTransform {

  transform(value: string): string {
    if (value !== undefined) {
      return value.slice(0, 2)+'.'+ value.slice(2,4)+'.'+value.slice(4,6)+'.'+ value.slice(6,8)+'.'+value.slice(8,10)
    } else {
      return ''
    }  
}
}