import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Api } from '../api/api';
/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class UsuarioProvider {





  constructor(public api: Api) {

  }





  public login(user: string, password: string): Observable<any> {
    console.log(' LLAMAR A ,  usuariosService/login/' + user + '/' + password);
    return this.api.get('usuariosService/login/' + user + '/' + password);
  }

}
