import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchClientePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchCliente',
})
export class SearchClientePipe implements PipeTransform {
  
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.cliente.toLowerCase().includes(terms);
    });
  }
}
