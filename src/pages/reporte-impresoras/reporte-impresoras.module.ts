import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReporteImpresorasPage } from './reporte-impresoras';

import { SignaturePadModule } from 'angular2-signaturepad'
@NgModule({
  declarations: [
    ReporteImpresorasPage,
  ],
  imports: [
    IonicPageModule.forChild(ReporteImpresorasPage),
    SignaturePadModule
  ],
})
export class ReporteImpresorasPageModule { }
