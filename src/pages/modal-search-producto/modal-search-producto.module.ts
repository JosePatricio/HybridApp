import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSearchProductoPage } from './modal-search-producto';
import { PipesModule } from '../../pipes/pipes.module'
@NgModule({
  declarations: [
    ModalSearchProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSearchProductoPage),PipesModule
  ],
})
export class ModalSearchProductoPageModule {}
