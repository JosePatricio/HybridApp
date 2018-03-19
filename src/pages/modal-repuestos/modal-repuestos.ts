import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ModalController } from 'ionic-angular';
import { DetalleCatalogoReporte, Producto, ProductoRepuestoReporte } from '../../models/models';
import { ProductoRepuestoReporteProvider } from '../../providers/providers';
/**
 * Generated class for the ModalRepuestosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-repuestos',
  templateUrl: 'modal-repuestos.html',
})
export class ModalRepuestosPage {

  detalleCatalogoReporte: DetalleCatalogoReporte = new DetalleCatalogoReporte();
  producto: Producto = new Producto();
  repuestos: Array<ProductoRepuestoReporte>;
  productoRepuestoReporte: ProductoRepuestoReporte = new ProductoRepuestoReporte();

  loading: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public productoRepuestoReporteProvider: ProductoRepuestoReporteProvider) {

    this.detalleCatalogoReporte = navParams.get('detalle');
    this.producto = navParams.get('producto');
  }

  ionViewDidLoad() {

    this.showLoader();
    console.log(' this.detalleCatalogoReporte.id= ' + this.detalleCatalogoReporte.id + '   ,this.productoidModelo= ' + this.producto.idModelo.id);
    this.productoRepuestoReporteProvider.getByIdDetalleCatalogoReporteByIdModelo(this.detalleCatalogoReporte.id, this.producto.idModelo.id).subscribe(data => {
      this.repuestos = data;
    });

    this.loading.dismiss();
  }




  cancel() {
    this.viewCtrl.dismiss();
  }



  openItem(valor: any) {
    this.productoRepuestoReporte = valor;
    let addModal = this.modalCtrl.create('ModalConfirmacionRepuestoPage', { productoRepuestoReporte: this.productoRepuestoReporte });
    addModal.onDidDismiss(item => {
      if ((item) && item.productoRepuestoReporte !== undefined) {
        this.viewCtrl.dismiss({ productoRepuestoReporte: item.productoRepuestoReporte });
      }

    })
    addModal.present();
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    this.loading.present();
  }


}
