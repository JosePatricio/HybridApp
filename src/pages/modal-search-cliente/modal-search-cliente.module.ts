import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSearchClientePage } from './modal-search-cliente';
import { PipesModule } from '../../pipes/pipes.module'
@NgModule({
  declarations: [
    ModalSearchClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSearchClientePage),
    PipesModule
  ],
})
export class ModalSearchClientePageModule {}
