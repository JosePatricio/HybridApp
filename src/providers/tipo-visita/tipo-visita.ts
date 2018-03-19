import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';


import { TipoVisitas } from '../../models/TipoVisitas';
/*
  Generated class for the TipoVisitaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class TipoVisitaProvider {

  constructor(public api: Api) {

  }


  public getAllTipoVisitas(): Observable<Array<TipoVisitas>> {
    return this.api.get_type<Array<TipoVisitas>>('tipoVisitaService/getAllTipoVisitas/');
  }

}
