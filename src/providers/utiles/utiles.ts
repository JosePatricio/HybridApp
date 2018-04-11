import { Injectable } from '@angular/core';
import {/* IonicPage, NavController, NavParams, ModalController, LoadingController,AlertController,*/ ToastController } from 'ionic-angular';
import {
  Cliente, Producto, Modelo, Marca, ProductoDetalleReporte, TipoVisitas, DetalleCatalogoReporte, Reporte, ProductoRepuestoReporte, Usuario,
  DetalleInventarioProducto, ClienteSucursal, ProductoClienteReporte, Proyectos,
  DatosReporteDTO, AsignacionReparaciones, ReporteMantenimiento
} from '../../models/models';

/*
  Generated class for the UtilesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilesProvider {


  public someData: any;
  constructor(private toastCtrl: ToastController) {


  }

  msgToast(msg: string) {

    let toast = this.toastCtrl.create({
      message: msg,
      duration: 9000,
      position: 'top',
      showCloseButton: true
    });
    toast.onDidDismiss(() => {
    });
    toast.present();
  }

  msgSaveToast(succes: boolean) {
    let msg: string;
    let css_Class: string;

    if (succes) {
      msg = "Reporte Guardado Correctamente";
      css_Class = "toastSucces";
    } else {
      msg = "Error al guardar el Reporte";
      css_Class = "toastError";
    }

    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass: css_Class
    });

    toast.onDidDismiss(() => {

    });

    toast.present();
  }



  public listPrevEdition(ids: any, catalogos: Array<DetalleCatalogoReporte>, reporteMantenimientoList: Array<ReporteMantenimiento>) {
    let list: Array<DetalleCatalogoReporte> = [];
    let catalogo: DetalleCatalogoReporte;
    let reporteMantenimientoListFiltered: Array<ReporteMantenimiento> = []


    reporteMantenimientoList.filter(f => f.idDetalleCatalogoReporte !== null).forEach(element => {
      reporteMantenimientoListFiltered.push(element);
    });
    let idSelected: number;
    catalogos.forEach(catalogo_ => {
      catalogo = new DetalleCatalogoReporte()
      catalogo = catalogo_;

      if (ids.length > 0) {
        for (var n = 0; n <= ids.length - 1; n++) {
          idSelected = parseInt(ids[n] + '');
          if (idSelected === catalogo.id) {
            catalogo.seleccion = true;
            break;
          } else {
            catalogo.seleccion = false;
            catalogo.idReporteMantenimiento = this.reporteMantenimientoByIdDetalle(catalogo, reporteMantenimientoListFiltered).id;
          }
        }
      } else {
        let reporteMantenimiento: ReporteMantenimiento;
        reporteMantenimiento = this.reporteMantenimientoByIdDetalle(catalogo, reporteMantenimientoListFiltered);
        catalogo.seleccion = false;
        catalogo.idReporteMantenimiento = reporteMantenimiento.id;

      }


      list.push(catalogo);
    });
    return list;
  }

  public reporteMantenimientoByIdDetalle(detalleCatalogoReporte: DetalleCatalogoReporte, reporteMantenimientoList: Array<ReporteMantenimiento>) {
    for (var n = 0; n <= reporteMantenimientoList.length - 1; n++) {
      if (detalleCatalogoReporte.id === reporteMantenimientoList[n].idDetalleCatalogoReporte.id) {
        return reporteMantenimientoList[n];
      }
    }
    return new ReporteMantenimiento();
  }

  public productoRepReporte(detalleCatalogoReporte: DetalleCatalogoReporte, productoRepuestoReportes: Array<ProductoRepuestoReporte>) {
    let productoRepuestoReporte: ProductoRepuestoReporte;
    for (var n = 0; n <= productoRepuestoReportes.length - 1; n++) {
      if (detalleCatalogoReporte.id === productoRepuestoReportes[n].idDetalleCatalogoReporte.id) {
        productoRepuestoReporte = new ProductoRepuestoReporte();
        productoRepuestoReporte = productoRepuestoReportes[n];
        productoRepuestoReporte.auxFound = true;
        return productoRepuestoReporte;

      }
    }
    return null;
  }

  public listCorrEdition(productoRepuestoReportes: Array<ProductoRepuestoReporte>, reporteMantenimientoList: Array<ReporteMantenimiento>, arrayCorrectivo: Array<DetalleCatalogoReporte>) {

    let listRes: Array<DetalleCatalogoReporte> = [];
    let detalleCatalogoReporte: DetalleCatalogoReporte;

    let reporteMantenimientoListFiltered: Array<ReporteMantenimiento> = []


    reporteMantenimientoList.filter(f => f.idProductoRepuestoReporte !== null).forEach(element => {
      reporteMantenimientoListFiltered.push(element);
    });

    arrayCorrectivo.forEach(catalogo => {
      detalleCatalogoReporte = new DetalleCatalogoReporte();
      detalleCatalogoReporte = catalogo;

      let aux: ProductoRepuestoReporte = this.productoRepReporte(detalleCatalogoReporte, productoRepuestoReportes);

      if (reporteMantenimientoListFiltered.length > 0) {


        for (var n = 0; n <= reporteMantenimientoListFiltered.length - 1; n++) {
          if (reporteMantenimientoListFiltered[n].idProductoRepuestoReporte.idDetalleCatalogoReporte.id === detalleCatalogoReporte.id) {
            if (aux !== null) {
              detalleCatalogoReporte = aux.idDetalleCatalogoReporte;
              detalleCatalogoReporte.seleccion = true;
              break
            } else {
              detalleCatalogoReporte.idReporteMantenimiento = reporteMantenimientoListFiltered[n].id;
            }
            break;
          } else {
            if (aux !== null) {
              detalleCatalogoReporte.idProductoRepuestoReporte = aux.id;
              detalleCatalogoReporte.seleccion = true;
            }
          }
        }
      } else {
        if (aux !== null) {
          detalleCatalogoReporte.idProductoRepuestoReporte = aux.id;
          detalleCatalogoReporte.seleccion = true;
          detalleCatalogoReporte.codigoRepuesto = aux.idProducto.codigoFabricante + '';
          detalleCatalogoReporte.porcentaje = aux.porcentaje;
          detalleCatalogoReporte.tipoRepuesto = aux.cambiado ? 'C' : 'S';
        }
      }
      listRes.push(detalleCatalogoReporte);
    });


    return listRes;
  }

  public listPrev(ids: any, catalogos: Array<DetalleCatalogoReporte>) {
    let list: Array<DetalleCatalogoReporte> = [];
    let catalogo: DetalleCatalogoReporte;

    let idSelected: number;
    catalogos.forEach(catalogo_ => {
      catalogo = new DetalleCatalogoReporte()
      catalogo = catalogo_;

      for (var n = 0; n <= ids.length - 1; n++) {
        idSelected = parseInt(ids[n] + '');
        if (idSelected === catalogo.id) {
          catalogo.seleccion = true;
          break;
        } else {
          catalogo.seleccion = false;
        }
      }
      list.push(catalogo);
    });
    return list;
  }

  public listCorr(ids: any) {
    let list: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    let obj: DetalleCatalogoReporte;

    ids.forEach(data => {
      obj = new DetalleCatalogoReporte();
      obj.idProductoRepuestoReporte = data.id;
      obj.codigoRepuesto = data.idProducto.codigoFabricante;
      obj.cambiado = data.cambiado;
      obj.solicitar = data.solicitar;
      obj.porcentaje = data.porcentaje;
      obj.tipoRepuesto = obj.cambiado ? 'C' : 'S';
      obj.seleccion = true;
      list.push(obj);

    });

    return list;
  }

  public loadReportePreventivos(repuestos: Array<DetalleCatalogoReporte>, reporteMantenimientoList: Array<ReporteMantenimiento>) {

    let list: Array<DetalleCatalogoReporte> = [];
    let catalogo: DetalleCatalogoReporte;

    repuestos.forEach(catalogoReporte => {
      catalogo = new DetalleCatalogoReporte();
      catalogo = catalogoReporte;

      reporteMantenimientoList.filter(sw => sw.idDetalleCatalogoReporte !== null).forEach(mantenimiento => {
        if (catalogoReporte.id === mantenimiento.idDetalleCatalogoReporte.id && mantenimiento.estado === true) {
          catalogo.seleccion = true;
          catalogo.idReporteMantenimiento = mantenimiento.id;
        }
      });

      list.push(catalogo);

    });


    return list;
  }

  public loadReportePreventivosIds(arrayPreventivos: Array<DetalleCatalogoReporte>, reporteMantenimientoList: Array<ReporteMantenimiento>) {
    let idList = [Number];
    if (arrayPreventivos !== null && reporteMantenimientoList !== null) {
      arrayPreventivos.forEach(catalogo => {
        reporteMantenimientoList.filter(sw => sw.idDetalleCatalogoReporte !== null).forEach(element => {
          if (element.idDetalleCatalogoReporte.id === catalogo.id) {
            this.someData = catalogo.id;
            idList.push(this.someData);
          }
        });
      });
    }
    return idList;
  }

  public loadReporteCorrectivosIds(arrayPreventivos: Array<DetalleCatalogoReporte>, reporteMantenimientoList: Array<ReporteMantenimiento>) {
    let idList = [Number];
    if (arrayPreventivos !== null && reporteMantenimientoList !== null) {
      arrayPreventivos.forEach(catalogo => {
        reporteMantenimientoList.filter(sw => sw.idProductoRepuestoReporte !== null).forEach(element => {
          if (element.idDetalleCatalogoReporte.id === catalogo.id) {
            this.someData = catalogo.id;
            idList.push(this.someData);
          }
        });
      });
    }
    return idList;
  }



  public validacionCamposReporte(): boolean {

    return false;
  }

  public horaActual(hora: string) {
    let date = new Date('1991-06-12 ' + hora)

    date.setHours(date.getHours() - 5);
    return date;
  }
  public horaActualFromDate(fecha: Date) {
    let date = new Date(Number(fecha));
    date.setHours(date.getHours() - 5);
    return date;
  }


  public formatoReporte(num): string {
    var s = "000000000" + num;
    return s;
  }

}
