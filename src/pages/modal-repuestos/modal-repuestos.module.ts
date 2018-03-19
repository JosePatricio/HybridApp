import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRepuestosPage } from './modal-repuestos';

@NgModule({
  declarations: [
    ModalRepuestosPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRepuestosPage),
  ],
})
export class ModalRepuestosPageModule {}
