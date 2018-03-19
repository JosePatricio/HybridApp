import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductoRepuestoReporte } from '../../models/models';
/**
 * Generated class for the ModalConfirmacionRepuestoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-confirmacion-repuesto',
  templateUrl: 'modal-confirmacion-repuesto.html',
})
export class ModalConfirmacionRepuestoPage {

  productoRepuestoReporte: ProductoRepuestoReporte = new ProductoRepuestoReporte();

  cambiado: boolean = false;
  solicitar: boolean = false;

  porcentaje:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.productoRepuestoReporte = navParams.get('productoRepuestoReporte');
  }

  ionViewDidLoad() {


  }


  aceptar() {

    let obj: ProductoRepuestoReporte = new ProductoRepuestoReporte();
    obj = this.productoRepuestoReporte;
    obj.solicitar = this.solicitar;
    obj.cambiado = this.cambiado;
    obj.porcentaje = this.porcentaje;
    

    this.viewCtrl.dismiss({ productoRepuestoReporte: obj });

  }


  cancel() {
    this.viewCtrl.dismiss();
  }

}
