import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if(value > args[0]){
      return value * 0.9;
    }

    return value;
  }

}
