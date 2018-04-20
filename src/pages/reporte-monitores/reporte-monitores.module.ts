import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReporteMonitoresPage } from './reporte-monitores';
import { SignaturePadModule } from 'angular2-signaturepad'
@NgModule({
  declarations: [
    ReporteMonitoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ReporteMonitoresPage),SignaturePadModule
  ],
})
export class ReporteMonitoresPageModule {}
