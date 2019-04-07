import { Pipe, PipeTransform } from '@angular/core';
import { IGoods } from './interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IGoods[], args?: any): any {
    const [currentValue] = args;
    const res = value.filter((curr: IGoods) =>
      curr.price.indexOf(currentValue) !== -1 ||
      curr.brand.toLowerCase().indexOf(currentValue) !== -1);
    return res;
  }

}
