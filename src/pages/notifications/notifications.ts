import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Usuario, AsignacionReparaciones } from '../../models/models';
import { NotificacionProvider } from '../../providers/providers';
import { ReporteImpresorasPage } from '../reporte-impresoras/reporte-impresoras';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  notificaciones: AsignacionReparaciones[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public notificacionProvider: NotificacionProvider,
    private nativePageTransitions: NativePageTransitions) {
    let usuario: Usuario = JSON.parse(localStorage.getItem("AUTENTHICATION"));


    console.log('ID LOGEADO '+usuario.id);
    notificacionProvider.getNotificacionesByEstadoReporteByIdUsuario(usuario.id).subscribe(data => {
      this.notificaciones = data;

    });

  }




  openItem(notificacion: any) {

   
 

   let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };

    this.nativePageTransitions.flip(options);
    this.navCtrl.push(ReporteImpresorasPage, { notification: JSON.stringify(notificacion) });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
