import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReporteGenericoPage } from './reporte-generico';
import { SignaturePadModule } from 'angular2-signaturepad'

@NgModule({
  declarations: [
    ReporteGenericoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReporteGenericoPage),SignaturePadModule
  ],
})
export class ReporteGenericoPageModule {}
