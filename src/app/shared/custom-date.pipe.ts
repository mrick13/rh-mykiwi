import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0, 2)+'/'+ value.slice(2,4)+'/'+value.slice(4,8)
  }
}
