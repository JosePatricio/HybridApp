//import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { DetalleCatalogoReporte, CabeceraCatalogoReporte } from '../../models/models';
//import { map, catchError } from 'rxjs/operators';




/*
  Generated class for the DetalleCatalogoReporteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetalleCatalogoReporteProvider {

  constructor(public api: Api) {
  }




  public getDetalleCatalogoReporteByCabeceraCodigo(codigo: String): Observable<Array<DetalleCatalogoReporte>> {
    return this.api.get_type<Array<DetalleCatalogoReporte>>('detalleCatalogoReporteService/getDetalleCatalogoReporteByCabeceraCodigo/' + codigo);
  }

  public getCabeceraCatalogoReportesByTipo(tipo: String): Observable<Array<CabeceraCatalogoReporte>> {
    return this.api.get_type<Array<CabeceraCatalogoReporte>>('detalleCatalogoReporteService/getCabeceraCatalogoReportesByTipo/' + tipo);
  }



}
