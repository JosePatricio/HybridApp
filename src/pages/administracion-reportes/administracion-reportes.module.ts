import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministracionReportesPage } from './administracion-reportes';
import { PipesModule } from '../../pipes/pipes.module'
@NgModule({
  declarations: [
    AdministracionReportesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdministracionReportesPage),
    PipesModule
  ],
})
export class AdministracionReportesPageModule {}
