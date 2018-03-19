import { Api } from '../api/api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ClienteSucursal } from '../../models/clienteSucursal';
/*
  Generated class for the ClienteSucursalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteSucursalProvider {

  constructor(public api: Api) {
  }


  public getByIdCliente(idcliente: number): Observable<Array<ClienteSucursal>> {
    return this.api.get_type<Array<ClienteSucursal>>('clienteSucursalService/getByIdCliente/'+idcliente);
  }

}
