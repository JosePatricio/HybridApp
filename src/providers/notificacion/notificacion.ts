
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
/*
  Generated class for the NotificacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificacionProvider {

  private numeroNotificacion: number;
  
  constructor(public api: Api) {
    this.numeroNotificacion = 0;
  }


  public updateIdDeviceCode(codigo: string) {
    return this.api.putHttp('parametrosService/updateIdDeviceCode/' + codigo, null);
  }



  public setnumeroNotificacion(numero: number) {
    this.numeroNotificacion = numero;
  }

  public getnumeroNotificacion() {
    return this.numeroNotificacion;
  }

}
