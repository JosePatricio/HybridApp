
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { AsignacionReparaciones } from '../../models/models';
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


  public getNotificacionesByEstadoReporteByIdUsuario(id: number): Observable<Array<AsignacionReparaciones>> {
    return this.api.get_type<Array<AsignacionReparaciones>>('asignacionReparacionService/getNotificacionesByEstadoReporteByIdUsuario/' + id);
  }




  public setnumeroNotificacion(numero: number) {
    this.numeroNotificacion = numero;
  }

  public getnumeroNotificacion() {
    return this.numeroNotificacion;
  }

}
