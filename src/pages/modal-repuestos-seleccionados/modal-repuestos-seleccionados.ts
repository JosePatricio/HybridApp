import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ViewController } from 'ionic-angular';
import { ProductoRepuestoReporte } from '../../models/models';


/**
 * Generated class for the ModalRepuestosSeleccionadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-repuestos-seleccionados',
  templateUrl: 'modal-repuestos-seleccionados.html',
})
export class ModalRepuestosSeleccionadosPage {

  arrayRepuestos: Array<ProductoRepuestoReporte> = new Array<ProductoRepuestoReporte>();
  loading: any;
  cabecera: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) {
    this.showLoader();
    this.arrayRepuestos = navParams.get('arrayRepuestos');
    this.cabecera = navParams.get('cabecera');
    this.loading.dismiss();

    /*let swe:ProductoRepuestoReporte=new ProductoRepuestoReporte();
    swe.idDetalleCatalogoReporte.descripcion;*/
  }



  ionViewDidLoad() {
  }

  deleteItem(r: any) {
    console.log('Eliminar ' + r);


    let index = this.arrayRepuestos.indexOf(r);
    console.log('INDEX TP DELETE ' + index);
    if (index > -1) {
      this.arrayRepuestos.splice(index, 1); // works

    }

  }


  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    this.loading.present();
  }

  cancel() {
    this.viewCtrl.dismiss({  cabecera: this.cabecera,arrayRepuestos: this.arrayRepuestos });
  }

}
