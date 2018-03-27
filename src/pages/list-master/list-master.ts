import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController,PopoverController } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ReporteImpresorasPage } from '../reporte-impresoras/reporte-impresoras';
import { NotificationsPage } from '../notifications/notifications';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {



  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private nativePageTransitions: NativePageTransitions,public popoverCtrl: PopoverController) {
    //this.currentItems = this.items.query();
  }

  slidePage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    };

    this.nativePageTransitions.slide(options);
    this.navCtrl.setRoot(ReporteImpresorasPage);
  }

  flipPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };

    this.nativePageTransitions.flip(options);
    this.navCtrl.push(ReporteImpresorasPage);
  }

  fadePage() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(ReporteImpresorasPage);
  }

  curlPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };
    this.nativePageTransitions.curl(options);
    this.navCtrl.setRoot(ReporteImpresorasPage);
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




  openItem(item: any) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}
