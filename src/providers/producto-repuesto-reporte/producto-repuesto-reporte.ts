import { Api } from '../api/api';
import { Injectable } from '@angular/core';
import { ProductoRepuestoReporte } from '../../models/models';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProductoRepuestoReporteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoRepuestoReporteProvider {


  constructor(public api: Api) {
  }


  public getByIdDetalleCatalogoReporteByIdModelo(idDetalle: number, idModelo: number): Observable<Array<ProductoRepuestoReporte>> {
    return this.api.get_type<Array<ProductoRepuestoReporte>>('productoRepuestoReporteServiceRest/getByIdDetalleCatalogoReporteByIdModelo/' + idDetalle + '/' + idModelo);
  }

}
