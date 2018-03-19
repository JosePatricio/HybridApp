import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchProductoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchProducto',
})
export class SearchProductoPipe implements PipeTransform {
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.codigoFabricante.toLowerCase().includes(terms);
    });
  }
}
