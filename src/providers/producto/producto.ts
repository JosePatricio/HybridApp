import { Api } from '../api/api';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoProvider {


  constructor( public api: Api) {
 
  }
  public getOnlyProductosByCodigoCategoria(codigo :String) {
    return this.api.get_pipe('productoService/getOnlyProductosByCodigoCategoria/'+codigo);
  }


}
