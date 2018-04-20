import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReporteTrituradoresPage } from './reporte-trituradores';
import { SignaturePadModule } from 'angular2-signaturepad'
@NgModule({
  declarations: [
    ReporteTrituradoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ReporteTrituradoresPage),SignaturePadModule
  ],
})
export class ReporteTrituradoresPageModule {}
