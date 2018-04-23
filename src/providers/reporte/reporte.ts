import { Api } from '../api/api';
import { Injectable } from '@angular/core';
import { DatosReporteDTO, ProductoClienteReporte } from '../../models/models';

import { Observable } from 'rxjs/Observable';


/*


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of } from "rxjs/observable/of";*/

/*
  Generated class for the ReporteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ReporteProvider {




  //url = "http://localhost:8080/connector-1.0/rest/reporteService/user/";

  constructor(public api: Api) {

  }



  reportePdfImpresora(idReporte: number): any {

    return this.api.getPdf('/reporteService/descarga/' + idReporte);



  }






  public saveAllReporteImpresoras(item: DatosReporteDTO) {
    return this.api.postHttp('reporteService/saveAllReporteImpresoras/', item);

  }


  public updateAllReporteImpresoras(item: DatosReporteDTO) {
    return this.api.putHttp('reporteService/updateAllReporteImpresoras/' + item.reporte.id, item);
  }


  public saveReporteReporteGenerico(item: DatosReporteDTO) {
    return this.api.postHttp('reporteService/saveReporteReporteGenerico/', item);
  }


  public updateReporteReporteGenerico(item: DatosReporteDTO) {
    return this.api.putHttp('reporteService/updateReporteReporteGenerico/' , item);
  }


  public numeroReporte(idUsuario: number, tipo: String, subtipo: String) {
    return this.api.get_type<number>('reporteService/numeroReporte/' + idUsuario + '/' + tipo + '/' + subtipo);
  }



  public numeroReporteFormateado(idUsuario: number, tipo: String, subtipo: String) {
    return this.api.get('reporteService/numeroReporteFormateado/' + idUsuario + '/' + tipo + '/' + subtipo);
  }


  public reportesBySubTipo(tipo: String) {
    return this.api.get_pipe('reporteService/reportesBySubTipo/' + tipo);
  }



  public reportesById(id: number): Observable<ProductoClienteReporte> {
    return this.api.get_type<ProductoClienteReporte>('reporteService/reporteById/' + id);
  }




}
