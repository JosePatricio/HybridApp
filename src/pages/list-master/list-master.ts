import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {


  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    //this.currentItems = this.items.query();
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
}
