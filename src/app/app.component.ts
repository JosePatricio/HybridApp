import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, MenuController, AlertController } from 'ionic-angular';

import { FirstRunPage, MainPage } from '../pages/pages';

import { Api, NotificacionProvider } from '../providers/providers';

import { ReporteImpresorasPage } from '../pages/reporte-impresoras/reporte-impresoras';
import { AdministracionReportesPage } from '../pages/administracion-reportes/administracion-reportes';
import { LogOutPage } from '../pages/log-out/log-out';


import { SideMenuContentComponent } from './../shared/side-menu-content/side-menu-content.component';
import { SideMenuSettings } from './../shared/side-menu-content/models/side-menu-settings';
import { MenuOptionModel } from './../shared/side-menu-content/models/menu-option-model';
import { timer } from 'rxjs/observable/timer';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FCM, NotificationData } from "@ionic-native/fcm";
import { AsignacionReparaciones, Usuario } from '../models/models';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Vibration } from '@ionic-native/vibration';
import { LoginPage } from '../pages/login/login';

@Component({

  templateUrl: 'app.html'

})


export class MyApp {
  rootPage: any;

  @ViewChild(Nav) nav: Nav;

  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  asignacionReparaciones: AsignacionReparaciones;
  usuario: Usuario;






  constructor(private alertCtrl: AlertController, private menuCtrl: MenuController, private translate: TranslateService,
    private platform: Platform, private config: Config, private statusBar: StatusBar, public api: Api, public notificacionProvider: NotificacionProvider,
    private splashScreen: SplashScreen, private fcm: FCM, private backgroundMode: BackgroundMode, private vibration: Vibration, private localNotifications: LocalNotifications) {

    this.usuario = JSON.parse(localStorage.getItem("AUTENTHICATION"));
    this.api.consola('EL USUARIO ES ' + JSON.stringify(this.usuario) + ' , VALICADION  ' + (this.usuario === null)).subscribe(x => { });

    this.rootPage = (this.usuario === null) ? FirstRunPage : MainPage;


    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.platform.is('android')) {
        this.getIdDeviceoken();
        this.onNotification();
        this.giveAlert();

        this.backgroundMode.setDefaults({ title: 'App to Run in BackGround', text: 'App Running in Background', resume: true, hidden: true, silent: true });
        this.backgroundMode.setDefaults({ silent: true });

        this.backgroundMode.enable();
        this.backgroundMode.on("activate").subscribe(() => {
          this.onNotification();
        });

      }


    });

    this.initTranslate();
    this.initializeApp();

  }


  giveAlert() {
    // Give the alert once the notification is clicked/scheduled
    this.localNotifications.on("click", (notification, state) => {

      this.nav.push(ReporteImpresorasPage, { notification: notification });

    });

  }


  private getIdDeviceoken(): void {
    this.fcm.getToken()
      .then((token: string) => {
        //aquí se debe enviar el token al back-end para tenerlo registrado y de esta forma poder enviar mensajes
        // a esta  aplicación
        //o también copiar el token para usarlo con Postman :D
        this.api.consola('The used TOKENis ' + token).subscribe(gr => { });

        this.notificacionProvider.updateIdDeviceCode(token).then(r => { });

      })
      .catch(error => {
        //ocurrió un error al procesar el token
        console.error(error);
      });

    /**
     * No suscribimos para obtener el nuevo token cuando se realice un refresh y poder seguir procesando las notificaciones
     * */
    this.fcm.onTokenRefresh().subscribe(
      (token: string) => console.log("Nuevo token", token),
      error => console.error(error)
    );

  }

  private onNotification(): void {

    this.fcm.onNotification().subscribe(
      (data: NotificationData) => {
        this.asignacionReparaciones = JSON.parse(data.jsonNotification);

        if (data.wasTapped) {
          //ocurre cuando nuestra app está en segundo plano y hacemos tap en la notificación que se muestra en el dispositivo
          console.log("Received in background", JSON.stringify(data))
        } else {
          //ocurre cuando nuestra aplicación se encuentra en primer plano,
          //puedes mostrar una alerta o un modal con los datos del mensaje
          this.api.consola('  NOTIFICACION ENTRADA      ' + JSON.stringify(this.asignacionReparaciones)).subscribe(x => { });

          this.vibration.vibrate(500);

          this.localNotifications.schedule({
            id: this.asignacionReparaciones.id,
            title: 'Notificación',
            text: this.asignacionReparaciones.observacion,
            data: { data: data.jsonNotification }
          });


        }
      }, error => {
        console.error("Error in notification", error)
      }
    );

  }




  // Options to show in the SideMenuComponent
  public options: Array<MenuOptionModel>;
  // Settings for the SideMenuComponent
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: 'active-side-menu-option',
    subOptionIndentation: {
      md: '56px',
      ios: '64px',
      wp: '56px'
    }
  };







  private initializeOptions(): void {
    this.options = new Array<MenuOptionModel>();

    // Load simple menu options
    // ------------------------------------------
    this.options.push({
      iconName: 'home',
      displayName: 'Home',
      component: MainPage,

      // This option is already selected
      selected: true
    });



    // Load options with nested items (with icons)
    // -----------------------------------------------
    this.options.push({
      displayName: 'Reportes',
      subItems: [

        {
          iconName: 'list-box',
          displayName: 'Administracion',
          component: AdministracionReportesPage
        },
        {
          iconName: 'print',
          displayName: 'Impresoras',
          component: ReporteImpresorasPage
          // component: { ReporteImpresorasPage, isEdit: true }
        },
        {
          iconName: 'qr-scanner',
          displayName: 'Scanner',
          //	component: DetailsPage
        }
        ,
        {
          iconName: 'desktop',
          displayName: 'Monitor',
          //	component: DetailsPage
        }
        ,
        {
          iconName: 'bookmark',
          displayName: 'Destructora',
          //	component: DetailsPage
        }
        ,
        {
          iconName: 'bookmarks',
          displayName: 'Etiquetadoras',
          //	component: DetailsPage
        },
        {
          iconName: 'clientes',
          displayName: 'Etiquetadoras',
          //	component: DetailsPage
        }
      ]
    });




    this.options.push({
      iconName: 'log-out',
      displayName: 'Salir',
      component: LogOutPage,

    });


    // Load special options
    // -----------------------------------------------


  }


  public selectOption(option: MenuOptionModel): void {
    this.menuCtrl.close().then(() => {
      if (option.custom && option.custom.isLogin) {
        this.presentAlert('You\'ve clicked the login option!');
      } else if (option.custom && option.custom.isLogout) {
        this.presentAlert('You\'ve clicked the logout option!');
      } else if (option.custom && option.custom.isExternalLink) {
        let url = option.custom.externalUrl;
        window.open(url, '_blank');
      } else {
        // Redirect to the selected page
        //	this.nav.setRoot(option.component || DetailsPage, { 'title': option.displayName });
        this.nav.setRoot(option.component, { 'title': option.displayName });
      }
    });
  }

  public collapseMenuOptions(): void {
    this.sideMenu.collapseAllOptions();
  }

  public presentAlert(message: string): void {
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: message,
      buttons: ['Ok']
    });
    alert.present();
  }





  showSplash = true;




  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false);

      // Initialize some options
      this.initializeOptions();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('es');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('es'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }





  openPage(page) {
    this.menuCtrl.close();
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
