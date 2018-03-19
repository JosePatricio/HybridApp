import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Producto } from '../../models/producto';
import { ProductoProvider } from '../../providers/providers';

/**
 * Generated class for the ModalSearchProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-search-producto',
  templateUrl: 'modal-search-producto.html',
})
export class ModalSearchProductoPage {




  productos: string[];
  errorMessage: string;

  
  column: string = 'codigoFabricante';
  loading: any;
  producto: Producto = new Producto();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public clienteProvider: ProductoProvider,
    public loadingCtrl: LoadingController
  ) {

  }





  cancel() {
    this.viewCtrl.dismiss();
  }




  ionViewDidLoad() {
    this.showLoader();

    this.getProductos();

    this.loading.dismiss();
  }


  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    this.loading.present();
  }




  getProductos() {
    this.clienteProvider.getOnlyProductosByCodigoCategoria('IMPR')
      .subscribe(
      productos => {
        this.productos = productos;
        this.productos.forEach(p => {
          //  console.log('el datos es ' + p['idModelo']['modelo'])
        });
      }
      ,
      error => this.errorMessage = <any>error);
  }

 
  

vals:String;

  openItem(productoSelected: Producto) {
    this.viewCtrl.dismiss(productoSelected);
   /* localStorage.setItem('productoSelected', JSON.stringify(productoSelected));

    this.navCtrl.push(AdministracionReportesPage, {
      productoSelected: productoSelected,
      tabReporte: 'equipo'
    });
  }
*/

}
}