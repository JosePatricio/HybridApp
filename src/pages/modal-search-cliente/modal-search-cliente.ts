import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { ClienteProvider } from '../../providers/providers';
import { Cliente } from '../../models/models';

/**
 * Generated class for the ModalSearchClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-search-cliente',
  templateUrl: 'modal-search-cliente.html',
})
export class ModalSearchClientePage {



  clientes: string[];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'cliente';
  loading: any;
  cliente: Cliente = new Cliente();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public clienteProvider: ClienteProvider,
    public loadingCtrl: LoadingController
  ) {
  }





  cancel() {
    this.viewCtrl.dismiss();
  }

 
  

  ionViewDidLoad() {
    this.showLoader();

    this.getClientes();

    this.loading.dismiss();
  }


  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    this.loading.present();
  }


  getClientes() {
    this.clienteProvider.getCliente_pipe()
      .subscribe(
        clientes => this.clientes = clientes,
      error => this.errorMessage = <any>error);
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }



  openItem(clienteSelected: Cliente) {

    this.viewCtrl.dismiss(clienteSelected);

  // localStorage.setItem('clienteSelected', JSON.stringify(clienteSelected));

  /*  this.navCtrl.push(AdministracionReportesPage, {
      clienteSelected: clienteSelected,
      tabReporte:'datos'
    });
*/


  }





}



