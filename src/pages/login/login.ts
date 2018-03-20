import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, MenuController, LoadingController } from 'ionic-angular';

import { UsuarioProvider } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: 'pato1',
    password: '123'
  };

  loading: any;
  // Our translated text strings
  private loginErrorString: string;


  //private isLogged: boolean = false;


  constructor(public navCtrl: NavController,
    public usuarioProvider: UsuarioProvider,
    public toastCtrl: ToastController, public menu: MenuController,
    public translateService: TranslateService, public loadingCtrl: LoadingController) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })

    /* 
        this.isLogged = localStorage.getItem("AUTENTHICATION") == null;
        console.log('HAY SESSION? ' + this.isLogged);
        this.menu.enable(this.isLogged, 'idMainMenu');
     */

  }

  ionViewDidEnter() {
  //  this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
   // this.menu.swipeEnable(true);

  }


  // Attempt to login in through our User service
  doLogin() {


    this.showLoader();

    this.usuarioProvider.login(this.account.username, this.account.password).subscribe(
      data => {

        localStorage.setItem('AUTENTHICATION', JSON.stringify(data));


        this.navCtrl.push(MainPage);


      },
      err => {

        localStorage.setItem('AUTENTHICATION', null);
        let toast = this.toastCtrl.create({
          message: this.loginErrorString,
          duration: 3000,
          position: 'top'
        });
        toast.present();

      }
    );

    this.loading.dismiss();

    

  }





  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    this.loading.present();
  }

}
