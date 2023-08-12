import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../Data/DomainModels/Common/IProduct";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if(search.length === 0) return products
    return products.filter(p => p.description.toLowerCase().includes(search.toLowerCase()))
  }

}
