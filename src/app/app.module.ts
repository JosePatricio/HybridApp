import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Settings } from '../providers/providers';

import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { HttpModule } from '@angular/http';


import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { DetalleCatalogoReporteProvider } from '../providers/detalle-catalogo-reporte/detalle-catalogo-reporte';
import { ClienteProvider } from '../providers/cliente/cliente';
import { ReporteProvider } from '../providers/reporte/reporte';
import { ProductoProvider } from '../providers/producto/producto';
import { TipoVisitaProvider } from '../providers/tipo-visita/tipo-visita';
import { ParametrosProvider } from '../providers/parametros/parametros';
import { ClienteSucursalProvider } from '../providers/cliente-sucursal/cliente-sucursal';
import { ConsultasProvider } from '../providers/consultas/consultas';


import { ReporteImpresorasPage } from '../pages/reporte-impresoras/reporte-impresoras';
import { AdministracionReportesPage } from '../pages/administracion-reportes/administracion-reportes';
import { LogOutPage } from '../pages/log-out/log-out';
import { NotificationsPage } from '../pages/notifications/notifications';


import { PipesModule } from '../pipes/pipes.module';
import { ProductoRepuestoReporteProvider } from '../providers/producto-repuesto-reporte/producto-repuesto-reporte';



import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file'

import { SignaturePadModule } from 'angular2-signaturepad'
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { NotificacionProvider } from '../providers/notificacion/notificacion';

import { LocalNotifications } from '@ionic-native/local-notifications';
import {FCM} from "@ionic-native/fcm";
import { Vibration } from '@ionic-native/vibration';
import { BackgroundMode } from '@ionic-native/background-mode';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}



@NgModule({
  declarations: [
    MyApp, ReporteImpresorasPage, AdministracionReportesPage, LogOutPage,NotificationsPage,
    SideMenuContentComponent,

  ],


  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    PipesModule,
    SignaturePadModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, ReporteImpresorasPage, AdministracionReportesPage, LogOutPage,NotificationsPage
  ],
  providers: [
    BackgroundMode,
    Vibration,
    FCM,
    LocalNotifications,
    FileOpener, File,
    InAppBrowser,
    Api,
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsuarioProvider,
    DetalleCatalogoReporteProvider,
    ClienteProvider,
    ReporteProvider,
    ProductoProvider,
    TipoVisitaProvider,
    ParametrosProvider,
    ClienteSucursalProvider,
    ConsultasProvider,
    ProductoRepuestoReporteProvider,
    NativePageTransitions,
    NotificacionProvider

  ]
})
export class AppModule { }
