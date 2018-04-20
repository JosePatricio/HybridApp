import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReporteScannersPage } from './reporte-scanners';

import { SignaturePadModule } from 'angular2-signaturepad'
@NgModule({
  declarations: [
    ReporteScannersPage,
  ],
  imports: [
    IonicPageModule.forChild(ReporteScannersPage),SignaturePadModule
  ],
})
export class ReporteScannersPageModule {}
