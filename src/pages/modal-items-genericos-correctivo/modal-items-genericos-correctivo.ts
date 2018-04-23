import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReporteGenericoItems } from '../../models/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilesProvider } from '../../providers/providers';

/**
 * Generated class for the ModalItemsGenericosCorrectivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-items-genericos-correctivo',
  templateUrl: 'modal-items-genericos-correctivo.html',
})
export class ModalItemsGenericosCorrectivoPage {

  reporteForm: FormGroup;
  public arrayRepuestos: Array<ReporteGenericoItems> = new Array<ReporteGenericoItems>();
  public reporteGenericoItems: ReporteGenericoItems = new ReporteGenericoItems();

  descripcionReporte: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public utilesProvider: UtilesProvider,
    public viewCtrl: ViewController) {

    this.reporteForm = this.createMyForm();
    if (navParams.get('arrayRepuestosCorrectivos') != undefined) {
      this.arrayRepuestos = navParams.get('arrayRepuestosCorrectivos');
    }

  }

  ionViewDidLoad() {

  }


  public agregar(): void {
    if (this.reporteGenericoItems.descripcion != undefined) {
      this.reporteGenericoItems.tipo = 'C';
      this.reporteGenericoItems.seleccion=true;
      this.arrayRepuestos.push(this.reporteGenericoItems);
      this.reporteGenericoItems = new ReporteGenericoItems();
      this.reporteForm.reset();

      console.log(this.arrayRepuestos);

    } else {
      this.utilesProvider.msgToastWarn('El campo no puede estar vacio');

    }
  }

  public deleteItem(item: any): void {

    let index = this.arrayRepuestos.indexOf(item);
    if (index > -1) {
      this.arrayRepuestos.splice(index, 1);

    }
  }

  public cancel() {
    this.viewCtrl.dismiss({ arrayRepuestosCorrectivos: this.arrayRepuestos });
  }

  private createMyForm() {
    return this.formBuilder.group({
      descripcion: [this.reporteGenericoItems.descripcion],
      cambiado: [this.reporteGenericoItems.cambiado],
      solicitar: [this.reporteGenericoItems.solicitar],
      codigoRepuesto: [this.reporteGenericoItems.codigoRepuesto]
    });
  }

}