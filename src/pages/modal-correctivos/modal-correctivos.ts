import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController } from 'ionic-angular';
import { DetalleCatalogoReporte, Producto } from '../../models/models';
import { DetalleCatalogoReporteProvider } from '../../providers/providers';
/**
 * Generated class for the ModalCorrectivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-correctivos',
  templateUrl: 'modal-correctivos.html',
})
export class ModalCorrectivosPage {


  catalogos: Array<DetalleCatalogoReporte>;
  cabecera: string;
  producto: Producto = new Producto();;

  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public modalCtrl: ModalController, public loadingCtrl: LoadingController
    , public detalleCatalogoReporteProvider: DetalleCatalogoReporteProvider) {

    this.cabecera = navParams.get('cabecera');
    this.producto = navParams.get('producto');

  }

  cancel() {
    this.viewCtrl.dismiss();
  }


  openItem(detalle: DetalleCatalogoReporte) {

    let addModal = this.modalCtrl.create('ModalRepuestosPage', { detalle: detalle, producto: this.producto });
    addModal.onDidDismiss(item => {
      if ((item) && item.productoRepuestoReporte !== undefined) {
        this.viewCtrl.dismiss({ cabecera: this.cabecera, productoRepuestoReporte: item.productoRepuestoReporte });
      }
    })
    addModal.present();
  }


  ionViewDidLoad() {

    this.showLoader();

    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo(this.cabecera).subscribe(data => {
      this.catalogos = data;
    });

    this.loading.dismiss();

  }



  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    this.loading.present();
  }

}
