import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../../models/cliente';
import { Api } from '../api/api';
import { map, catchError } from 'rxjs/operators';
/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteProvider {


  constructor(public api: Api,public http: HttpClient) {

  }

  public getClientes(): Observable<Array<Cliente>> {
    return this.api.get_type<Array<Cliente>>('clienteService/getClientes/');
  }



  public getCliente_pipe() {
    return this.api.get_pipe('clienteService/getClientes');
  }



  private apiUrl = 'https://restcountries.eu/rest/v2/all';

  getCountries(): Observable<string[]> {
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }




}
