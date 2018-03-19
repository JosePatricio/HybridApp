import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRepuestosSeleccionadosPage } from './modal-repuestos-seleccionados';

@NgModule({
  declarations: [
    ModalRepuestosSeleccionadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRepuestosSeleccionadosPage),
  ],
})
export class ModalRepuestosSeleccionadosPageModule {}
