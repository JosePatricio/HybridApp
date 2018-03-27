import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, MenuController, AlertController } from 'ionic-angular';

import { FirstRunPage, MainPage } from '../pages/pages';

import { Settings } from '../providers/providers';

import { ReporteImpresorasPage } from '../pages/reporte-impresoras/reporte-impresoras';
import { AdministracionReportesPage } from '../pages/administracion-reportes/administracion-reportes';
import { LogOutPage } from '../pages/log-out/log-out';


import { SideMenuContentComponent } from './../shared/side-menu-content/side-menu-content.component';
import { SideMenuSettings } from './../shared/side-menu-content/models/side-menu-settings';
import { MenuOptionModel } from './../shared/side-menu-content/models/menu-option-model';
import { timer } from 'rxjs/observable/timer';



@Component({

  templateUrl: 'app.html'

})


export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

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



  pages: Array<{ title: string, component: any }>;

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

  constructor(private alertCtrl: AlertController, private menuCtrl: MenuController, private translate: TranslateService,
    /* platform: Platform*/private platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: AdministracionReportesPage },
      { title: 'List', component: AdministracionReportesPage }
    ];


    this.initTranslate();
    this.initializeApp();

  }


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
