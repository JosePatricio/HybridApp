import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, PopoverController } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ReporteImpresorasPage } from '../reporte-impresoras/reporte-impresoras';
import { NotificationsPage } from '../notifications/notifications';
import { NotificacionProvider } from '../../providers/providers';
import { ClienteSucursal } from '../../models/models';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {

  public notificationes: number;
  public colorNotification: string = 'light';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private nativePageTransitions: NativePageTransitions,
    public popoverCtrl: PopoverController, public notificacionProvider: NotificacionProvider) {
    //this.currentItems = this.items.query();

    this.notificationes = this.notificacionProvider.getnumeroNotificacion();
    this.colorNotification = this.notificationes == 0 ? 'light' : 'danger';




  }

  

  ngAfterViewInit() {
    // this.signaturePad is now available
    //  this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    // this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }



  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }



  

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}
