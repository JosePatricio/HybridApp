import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, LoadingController } from 'ionic-angular';
//import { Cliente, Producto, Modelo, Marca } from '../../models/models';


import { ReporteProvider, Api } from '../../providers/providers';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { ReporteImpresorasPage } from '../reporte-impresoras/reporte-impresoras';


/**
 * Generated class for the AdministracionReportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administracion-reportes',
  templateUrl: 'administracion-reportes.html',
})


export class AdministracionReportesPage {




  loading: any;
  errorMessage: string;

  reportes: string[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams
    , public reporteProvider: ReporteProvider, public api: Api,
    private file: File, public loadingCtrl: LoadingController,
    private fileOpener: FileOpener, public toastCtrl: ToastController
  ) {




  }

  ionViewDidLoad() {
    this.reporteProvider.reportesBySubTipo('REPORTE')
      .subscribe(
      reporte => {
        this.reportes = reporte;

      }
      ,
      error => this.errorMessage = <any>error);

  }



  openPdf(item: any) {
    this.showLoader();

    let blobPdf;
    this.reporteProvider.reportePdfImpresora(5).subscribe(
      data => {

        blobPdf = data; // Lets store the pdf Blob
        let filedir = this.file.dataDirectory;
        this.file.writeFile( //save PDF
          filedir,
          "reporte.pdf",
          blobPdf,
          { replace: true }
        ).then(() => {
          this.fileOpener.open( //open in native PDF
            filedir + 'reporte.pdf',
            'application/pdf'
          ).then(() => {
            //	this.pdfobj.active = false;
          }).catch(e => console.log('Open error', e));
        }).catch(e => console.log('Save error', e));

      },
      (error) => {

        this.toas(error);


      }
    );


    this.loading.dismiss();
  }


  edit(item: any) {

    let reporteDto = item;
    this.navCtrl.push(ReporteImpresorasPage, { reporteDto: reporteDto, isEdit: true });

  }



  openItem(item: any) {


    /*  let target = "_system";
      this.inAppBrowser.create(this.api.urlServices() + '/reporteService/jasper/5', target, this.optiones);
  */




    //this.openPdf();


    /* this.reporteProvider.reportePdfImpresora(5).subscribe(res => {
       var fileURL = URL.createObjectURL(res);
       window.open(fileURL);
     });*/


  }



  toas(msj: any) {
    let toast = this.toastCtrl.create({
      message: '!*****  ' + msj + '  **********',
      duration: 9000,
      position: 'top'
    });
    toast.present();
  }


  public showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    this.loading.present();
  }

}
