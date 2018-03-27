import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Cliente, Producto, Modelo, Marca, ProductoDetalleReporte, TipoVisitas, DetalleCatalogoReporte, Reporte, ProductoRepuestoReporte, Usuario,
  DetalleInventarioProducto, ClienteSucursal, ProductoClienteReporte, Proyectos,
  DatosReporteDTO
} from '../../models/models';
import { DetalleCatalogoReporteProvider, TipoVisitaProvider, ClienteProvider, ReporteProvider, ClienteSucursalProvider } from '../../providers/providers';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ReporteMantenimiento } from '../../models/reporteMantenimiento';
import { AdministracionReportesPage } from '../administracion-reportes/administracion-reportes';


/**
 * Generated class for the ReporteImpresorasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-reporte-impresoras',
  templateUrl: 'reporte-impresoras.html',
})
export class ReporteImpresorasPage {


  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 500,
    'canvasHeight': 300
  };


  detalles: Array<DetalleCatalogoReporte>;
  tiposVisitas: Array<TipoVisitas>;
  clienteSucursales: Array<ClienteSucursal> = new Array<ClienteSucursal>();

  arrayPreventivoProcesamiento: Array<DetalleCatalogoReporte> = [];
  arrayPreventivoProcesamientoIds = [Number];


  arrayPreventivoImagen: Array<DetalleCatalogoReporte> = [];
  arrayPreventivoImagenIds = [Number];

  arrayPreventivoFijacion: Array<DetalleCatalogoReporte> = [];
  arrayPreventivoFijacionIds = [Number];

  arrayPreventivoExteriores: Array<DetalleCatalogoReporte> = [];
  arrayPreventivoExterioresIds = [Number];


  arrayCorrectivoRepuestosSuministros: Array<ProductoRepuestoReporte> = new Array<ProductoRepuestoReporte>();
  arrayCorrectivoRepuestosImagen: Array<ProductoRepuestoReporte> = new Array<ProductoRepuestoReporte>();
  arrayCorrectivoRepuestosFijacion: Array<ProductoRepuestoReporte> = new Array<ProductoRepuestoReporte>();
  arrayCorrectivoRepuestosRevelado: Array<ProductoRepuestoReporte> = new Array<ProductoRepuestoReporte>();
  arrayCorrectivoRepuestosAlimentacion: Array<ProductoRepuestoReporte> = new Array<ProductoRepuestoReporte>();


  arrayCorrectivoSuministros: Array<DetalleCatalogoReporte> = [];
  arrayCorrectivoImagen: Array<DetalleCatalogoReporte> = [];
  arrayCorrectivoFijacion: Array<DetalleCatalogoReporte> = [];
  arrayCorrectivoRevelado: Array<DetalleCatalogoReporte> = [];
  arrayCorrectivoAlimentacion: Array<DetalleCatalogoReporte> = [];


  reporteMantenimientoListTemp: Array<ReporteMantenimiento> = [];

  factura: String;
  datosReporteDTO: DatosReporteDTO = new DatosReporteDTO();
  tipoVisita: TipoVisitas = new TipoVisitas();
  cliente: Cliente = new Cliente;
  producto: Producto = new Producto;
  modelo: Modelo = new Modelo;
  marca: Marca = new Marca;
  productoDetalleReporte: ProductoDetalleReporte = new ProductoDetalleReporte;
  productoRepuestoReporte: ProductoRepuestoReporte = new ProductoRepuestoReporte;
  reporte: Reporte = new Reporte;
  usuario: Usuario = new Usuario;
  detalleInventarioProducto: DetalleInventarioProducto = new DetalleInventarioProducto;
  clienteSucursal: ClienteSucursal = new ClienteSucursal;
  productoClienteReporte: ProductoClienteReporte = new ProductoClienteReporte;
  proyecto: Proyectos = new Proyectos;


  private isEdit: boolean;
  public someData: any;

  numeroReporteTecnico: String;
  numeroReporte: number;

  reporteForm: FormGroup;
  reporteTab: any;
  loading: any;

  visibleCorrectivosBtns: Array<Boolean> = [false, false, false, false, false, false];
  nombreListaCorrectivo: Array<string> = [];

  public signatureImage: string;

  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public detalleCatalogoReporteProvider: DetalleCatalogoReporteProvider, public clienteProvider: ClienteProvider,
    public tipoVisitaProvider: TipoVisitaProvider, public reporteProvider: ReporteProvider
    , public clienteSucursalProvider: ClienteSucursalProvider, private cdRef: ChangeDetectorRef,
    private toastCtrl: ToastController, private alertCtrl: AlertController
  ) {



  }




  ngOnInit() {

    this.reporteForm = this.createMyForm();

    let user = JSON.parse(localStorage.getItem("AUTENTHICATION"));

    this.usuario.id = user.id;
    this.usuario.usuario = user.usuario;
    this.usuario.codigo = user.codigo;
    this.usuario.nombreCompleto = user.nombreCompleto;


    this.isEdit = (this.navParams.get('isEdit') === true);

    if (this.navParams.get('tabReporte') === undefined) {
      this.reporteTab = 'datos';
    }
    else {
      this.reporteTab = this.navParams.get('tabReporte');
    }

    this.detalleCatalogoReporteProvider.getCabeceraCatalogoReportesByTipo('CORRECTIVO').
      subscribe(data => {
        let c: number = 0;
        data.forEach(x => {
          this.nombreListaCorrectivo[c] = x.descripcion;
          c++;
        });

      });


    if (this.navParams.get('reporteDto') !== undefined) {
      let idReporte: number = this.navParams.get('reporteDto')['id'];
      this.llenarReportePorId(idReporte);


    }

    else {

      this.llenarCatalogosPreventivos();
      this.reporteProvider.numeroReporteFormateado(this.usuario.id, 'REPORTE', 'DIAGNOSTICO').subscribe(
        data => {
          this.numeroReporteTecnico = data['valor'];
        }
      );

      this.reporteProvider.numeroReporte(this.usuario.id, 'REPORTE', 'DIAGNOSTICO').subscribe(
        data => {
          this.numeroReporte = data['valor'];
        }
      );


      this.reporte.numerofactura = this.numeroReporte;

      this.reporte.tipo = 'REPORTE';
      this.reporte.subtipo = 'IMPRESORAS';
      this.reporte.idUsuario = this.usuario;
      this.reporte.estado = 'PROCESANDO';

    }

  }





  private llenarReportePorId(idReporte: number): void {


    this.showLoader();
    this.reporteProvider.reportesById(idReporte).subscribe(data => {

      this.reporte.numerofactura = data.idReporte.numerofactura;
      this.productoClienteReporte = data;
      this.cliente = data.idCliente;
      this.reporte = data.idReporte;
      this.numeroReporteTecnico = data.idReporte.numerofactura + '';
      this.productoDetalleReporte = data.idProductoDetalleReporte;

      if (data.idProducto !== null) {
        this.producto = data.idProducto;
        this.modelo = data.idProducto.idModelo;
        this.marca = data.idProducto.idModelo.idMarca;
      }

      if (this.detalleInventarioProducto.id === undefined) {
        this.detalleInventarioProducto = new DetalleInventarioProducto;
        this.detalleInventarioProducto.serial = this.productoClienteReporte.serie;
      }
      else {
        this.detalleInventarioProducto = data.idDetalleInventarioProducto;
      }


      this.clienteSucursal = data.idClienteSucursal;
      this.clienteSucursalProvider.getByIdCliente(data.idCliente.id).subscribe(cs => {
        this.clienteSucursales = cs;
        this.clienteSucursales.forEach((client, index) => {
          if (this.clienteSucursal !== null) {
            if (client.id == this.clienteSucursal.id) {
              this.clienteSucursal = this.clienteSucursales[index];
              return;
            }
          }
        });
      });

      this.tipoVisita = data.idReporte.idVisita;
      this.tipoVisitaProvider.getAllTipoVisitas().subscribe(data => {
        this.tiposVisitas = data;

        this.tiposVisitas.forEach((visita, index) => {
          if (this.tipoVisita !== null) {
            if (visita.id == this.tipoVisita.id) {
              this.tipoVisita = this.tiposVisitas[index];
              this.reporteForm.value.idTipoVisita = this.tipoVisita.id;
              return;
            }
          }
        });
      });

      this.llenarCatalogosCorrectivos();

      this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('PROCESAMIENTO').subscribe(catalogo => {
        this.arrayPreventivoProcesamientoIds = this.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList);
        this.arrayPreventivoProcesamiento = this.loadReportePreventivos(catalogo, data.reporteMantenimientoList);
      });

      this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('IMAGEN_PREVENTIVO').subscribe(catalogo => {
        this.arrayPreventivoImagenIds = this.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList);
        this.arrayPreventivoImagen = this.loadReportePreventivos(catalogo, data.reporteMantenimientoList);
      });

      this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('FIJACION_PREVENTIVO').subscribe(catalogo => {
        this.arrayPreventivoFijacion = catalogo;
        this.arrayPreventivoFijacionIds = this.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList);
      });


      this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('EXTERIORES').subscribe(catalogo => { this.arrayPreventivoExteriores = catalogo; this.arrayPreventivoExterioresIds = this.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList); });


      this.reporteMantenimientoListTemp = data.reporteMantenimientoList;

      //VISIVILIDAD BOTON VER CORRECTIVOS
      data.reporteMantenimientoList.filter(sw => sw.idProductoRepuestoReporte !== null).forEach(element => {

        this.llenarRepuestos(element.idProductoRepuestoReporte.idDetalleCatalogoReporte.idCabecera.codigo, element.idProductoRepuestoReporte);
      });
      //FIN VISIVILIDAD BOTON VER CORRECTIVOS




      /*                                   FILL FORM VALUES                                                                                             */
      this.reporteForm.patchValue({
        idTipoVisita: this.tipoVisita.id,
        idClienteSucursal: this.clienteSucursal.id,
        referenciaCtrl: this.reporte.referencia,
        facturaCtrl: this.reporte.factura,
        sintomas: this.reporte.sintomasEquipo,

        observacionesRecomendaciones: this.reporte.observacionesRecomendaciones,
        notas: this.reporte.notas,
        atencion: this.productoClienteReporte.atencion,
        ipEquipo: this.productoClienteReporte.ipEquipo,
        puertoUsb: this.productoClienteReporte.puertoUsb,

        contadorTotalAnterior: this.productoDetalleReporte.contadorTotalAnterior,
        contadorColorAnterior: this.productoDetalleReporte.contadorColorAnterior,
        contadorBnAnterior: this.productoDetalleReporte.contadorBnAnterior,
        contadorTotalActual: this.productoDetalleReporte.contadorTotalActual,
        contadorColorActual: this.productoDetalleReporte.contadorColorActual,
        contadorBnActual: this.productoDetalleReporte.contadorBnActual,
        contadorTotalImpReal: this.productoDetalleReporte.contadorTotalImpReal,
        contadorColorImpReal: this.productoDetalleReporte.contadorColorImpReal,
        contadorBnImpReal: this.productoDetalleReporte.contadorBnImpReal,
        mantenimiento: this.productoDetalleReporte.mantenimiento,
        otros: this.productoDetalleReporte.otros,
        servicioFacturar: this.productoDetalleReporte.servicioFacturar,
        servicioFacturarEstado: this.productoDetalleReporte.servicioFacturarEstado


      });
      /*                                 END  FILL FORM VALUES                                                                                             */

      this.loading.dismiss();

    });
  }



  private guardar() {

    if (this.isEdit) {
      // this.reporte.numerofactura = this.numeroReporte;

      this.reporte.referencia = this.reporteForm.value.referenciaCtrl;
      this.reporte.factura = this.reporteForm.value.facturaCtrl;
      this.reporte.sintomasEquipo = this.reporteForm.value.sintomas;

      this.reporte.observacionesRecomendaciones = this.reporteForm.value.observacionesRecomendaciones;
      this.reporte.notas = this.reporteForm.value.notas;
      this.reporte.firmaClienteBase64 = this.signaturePad.toDataURL();


      //  this.proyecto.id = 10;
      this.productoClienteReporte.idProyecto = this.proyecto;
      this.productoClienteReporte.atencion = this.reporteForm.value.atencion;
      this.productoClienteReporte.ipEquipo = this.reporteForm.value.ipEquipo;
      this.productoClienteReporte.puertoUsb = this.reporteForm.value.puertoUsb;

      this.productoDetalleReporte.contadorTotalAnterior = this.reporteForm.value.contadorTotalAnterior;
      this.productoDetalleReporte.contadorColorAnterior = this.reporteForm.value.contadorColorAnterior;
      this.productoDetalleReporte.contadorBnAnterior = this.reporteForm.value.contadorBnAnterior;
      this.productoDetalleReporte.contadorTotalActual = this.reporteForm.value.contadorTotalActual;
      this.productoDetalleReporte.contadorColorActual = this.reporteForm.value.contadorColorActual;
      this.productoDetalleReporte.contadorBnActual = this.reporteForm.value.contadorBnActual;
      this.productoDetalleReporte.contadorTotalImpReal = this.reporteForm.value.contadorTotalImpReal;
      this.productoDetalleReporte.contadorColorImpReal = this.reporteForm.value.contadorColorImpReal;
      this.productoDetalleReporte.contadorBnImpReal = this.reporteForm.value.contadorBnImpReal;
      this.productoDetalleReporte.mantenimiento = this.reporteForm.value.mantenimiento;
      this.productoDetalleReporte.otros = this.reporteForm.value.otros;
      this.productoDetalleReporte.servicioFacturar = this.reporteForm.value.servicioFacturar;
      this.productoDetalleReporte.servicioFacturarEstado = this.reporteForm.value.servicioFacturarEstado;


      this.datosReporteDTO.productoDetalleReporte = this.productoDetalleReporte;
      this.datosReporteDTO.reporte = this.reporte;
      this.datosReporteDTO.producto = this.producto;
      this.datosReporteDTO.serie = this.detalleInventarioProducto.serial;
      this.datosReporteDTO.cliente = this.cliente;
      this.datosReporteDTO.usuarios = this.usuario;
      this.datosReporteDTO.idClienteSucursal = this.reporteForm.value.idClienteSucursal;
      this.datosReporteDTO.idTipoVisita = this.reporteForm.value.idTipoVisita;
      this.datosReporteDTO.productoClienteReporte = this.productoClienteReporte;


      this.datosReporteDTO.lista1 = this.listPrevEdition(this.arrayPreventivoProcesamientoIds, this.arrayPreventivoProcesamiento, this.reporteMantenimientoListTemp);
      this.datosReporteDTO.lista2 = this.listPrevEdition(this.arrayPreventivoImagenIds, this.arrayPreventivoImagen, this.reporteMantenimientoListTemp);
      this.datosReporteDTO.lista3 = this.listPrevEdition(this.arrayPreventivoFijacionIds, this.arrayPreventivoFijacion, this.reporteMantenimientoListTemp);
      this.datosReporteDTO.lista4 = this.listPrevEdition(this.arrayPreventivoExterioresIds, this.arrayPreventivoExteriores, this.reporteMantenimientoListTemp);

      this.datosReporteDTO.lista5 = this.listCorrEdition(this.arrayCorrectivoRepuestosSuministros, this.reporteMantenimientoListTemp, this.arrayCorrectivoSuministros);
      this.datosReporteDTO.lista6 = this.listCorrEdition(this.arrayCorrectivoRepuestosImagen, this.reporteMantenimientoListTemp, this.arrayCorrectivoImagen);
      this.datosReporteDTO.lista7 = this.listCorrEdition(this.arrayCorrectivoRepuestosFijacion, this.reporteMantenimientoListTemp, this.arrayCorrectivoFijacion);
      this.datosReporteDTO.lista8 = this.listCorrEdition(this.arrayCorrectivoRepuestosRevelado, this.reporteMantenimientoListTemp, this.arrayCorrectivoRevelado);

  

      this.showLoaderSave();

      this.reporteProvider.updateAllReporteImpresoras(this.datosReporteDTO).then(
        response => {
          this.navCtrl.push(AdministracionReportesPage);
          this.loading.dismiss();
          this.msgToast(true);
        }
      ).catch((error: any) => {
        this.msgToast(false);
        this.loading.dismiss();
      });



    } else {
      this.reporte.numerofactura = this.numeroReporte;
      this.reporte.referencia = this.reporteForm.value.referenciaCtrl;
      this.reporte.factura = this.reporteForm.value.facturaCtrl;
      this.reporte.sintomasEquipo = this.reporteForm.value.sintomas;

      this.reporte.observacionesRecomendaciones = this.reporteForm.value.observacionesRecomendaciones;
      this.reporte.notas = this.reporteForm.value.notas;
      this.reporte.firmaClienteBase64 = this.signaturePad.toDataURL();

      this.reporte.usuarioCreacion = this.usuario.usuario;
      this.productoClienteReporte.atencion = this.reporteForm.value.atencion;
      this.productoClienteReporte.ipEquipo = this.reporteForm.value.ipEquipo;
      this.productoClienteReporte.puertoUsb = this.reporteForm.value.puertoUsb;

      this.productoDetalleReporte.contadorTotalAnterior = this.reporteForm.value.contadorTotalAnterior;
      this.productoDetalleReporte.contadorColorAnterior = this.reporteForm.value.contadorColorAnterior;
      this.productoDetalleReporte.contadorBnAnterior = this.reporteForm.value.contadorBnAnterior;
      this.productoDetalleReporte.contadorTotalActual = this.reporteForm.value.contadorTotalActual;
      this.productoDetalleReporte.contadorColorActual = this.reporteForm.value.contadorColorActual;
      this.productoDetalleReporte.contadorBnActual = this.reporteForm.value.contadorBnActual;
      this.productoDetalleReporte.contadorTotalImpReal = this.reporteForm.value.contadorTotalImpReal;
      this.productoDetalleReporte.contadorColorImpReal = this.reporteForm.value.contadorColorImpReal;
      this.productoDetalleReporte.contadorBnImpReal = this.reporteForm.value.contadorBnImpReal;
      this.productoDetalleReporte.mantenimiento = this.reporteForm.value.mantenimiento;
      this.productoDetalleReporte.otros = this.reporteForm.value.otros;
      this.productoDetalleReporte.servicioFacturar = this.reporteForm.value.servicioFacturar;
      this.productoDetalleReporte.servicioFacturarEstado = this.reporteForm.value.servicioFacturarEstado;


      this.datosReporteDTO.productoDetalleReporte = this.productoDetalleReporte;
      this.datosReporteDTO.reporte = this.reporte;
      this.datosReporteDTO.producto = this.producto;
      this.datosReporteDTO.serie = this.detalleInventarioProducto.serial;
      this.datosReporteDTO.cliente = this.cliente;
      this.datosReporteDTO.usuarios = this.usuario;
      this.datosReporteDTO.idClienteSucursal = this.reporteForm.value.idClienteSucursal;
      this.datosReporteDTO.idTipoVisita = this.reporteForm.value.idTipoVisita;
      this.datosReporteDTO.productoClienteReporte = this.productoClienteReporte;



      this.datosReporteDTO.lista1 = this.listPrev(this.arrayPreventivoProcesamientoIds, this.arrayPreventivoProcesamiento);
      this.datosReporteDTO.lista2 = this.listPrev(this.arrayPreventivoImagenIds, this.arrayPreventivoImagen);
      this.datosReporteDTO.lista3 = this.listPrev(this.arrayPreventivoFijacionIds, this.arrayPreventivoFijacion);
      this.datosReporteDTO.lista4 = this.listPrev(this.arrayPreventivoExterioresIds, this.arrayPreventivoExteriores);

      this.datosReporteDTO.lista5 = this.listCorr(this.arrayCorrectivoRepuestosSuministros);
      this.datosReporteDTO.lista6 = this.listCorr(this.arrayCorrectivoRepuestosImagen);
      this.datosReporteDTO.lista7 = this.listCorr(this.arrayCorrectivoRepuestosFijacion);
      this.datosReporteDTO.lista8 = this.listCorr(this.arrayCorrectivoRepuestosRevelado);


      this.showLoaderSave();
      this.reporteProvider.saveAllReporteImpresoras(this.datosReporteDTO).then(
        response => {
          this.navCtrl.push(AdministracionReportesPage);
          this.loading.dismiss();
          this.msgToast(true);
        }
      ).catch((error: any) => {
        this.msgToast(false);
        this.loading.dismiss();
      })


    }
  }






  private listPrevEdition(ids: any, catalogos: Array<DetalleCatalogoReporte>, reporteMantenimientoList: Array<ReporteMantenimiento>) {
    let list: Array<DetalleCatalogoReporte> = [];
    let catalogo: DetalleCatalogoReporte;
    let reporteMantenimientoListFiltered: Array<ReporteMantenimiento> = []


    reporteMantenimientoList.filter(f => f.idDetalleCatalogoReporte !== null).forEach(element => {
      reporteMantenimientoListFiltered.push(element);
    });
    let idSelected: number;
    catalogos.forEach(catalogo_ => {
      catalogo = new DetalleCatalogoReporte()
      catalogo = catalogo_;

      if (ids.length > 0) {
        for (var n = 0; n <= ids.length - 1; n++) {
          idSelected = parseInt(ids[n] + '');
          if (idSelected === catalogo.id) {
            catalogo.seleccion = true;
            break;
          } else {
            catalogo.seleccion = false;
            catalogo.idReporteMantenimiento = this.reporteMantenimientoByIdDetalle(catalogo, reporteMantenimientoListFiltered).id;
          }
        }
      } else {
        let reporteMantenimiento: ReporteMantenimiento;
        reporteMantenimiento = this.reporteMantenimientoByIdDetalle(catalogo, reporteMantenimientoListFiltered);
        catalogo.seleccion = false;
        catalogo.idReporteMantenimiento = reporteMantenimiento.id;

      }


      list.push(catalogo);
    });
    return list;
  }


  private reporteMantenimientoByIdDetalle(detalleCatalogoReporte: DetalleCatalogoReporte, reporteMantenimientoList: Array<ReporteMantenimiento>) {
    for (var n = 0; n <= reporteMantenimientoList.length - 1; n++) {
      if (detalleCatalogoReporte.id === reporteMantenimientoList[n].idDetalleCatalogoReporte.id) {
        return reporteMantenimientoList[n];
      }
    }
    return new ReporteMantenimiento();
  }


  private productoRepReporte(detalleCatalogoReporte: DetalleCatalogoReporte, productoRepuestoReportes: Array<ProductoRepuestoReporte>) {
    let productoRepuestoReporte: ProductoRepuestoReporte;
    for (var n = 0; n <= productoRepuestoReportes.length - 1; n++) {
      if (detalleCatalogoReporte.id === productoRepuestoReportes[n].idDetalleCatalogoReporte.id) {
        productoRepuestoReporte = new ProductoRepuestoReporte();
        productoRepuestoReporte = productoRepuestoReportes[n];
        productoRepuestoReporte.auxFound = true;
        return productoRepuestoReporte;

      }
    }
    return null;
  }


  private listCorrEdition(productoRepuestoReportes: Array<ProductoRepuestoReporte>, reporteMantenimientoList: Array<ReporteMantenimiento>, arrayCorrectivo: Array<DetalleCatalogoReporte>) {

    let listRes: Array<DetalleCatalogoReporte> = [];
    let detalleCatalogoReporte: DetalleCatalogoReporte;

    let reporteMantenimientoListFiltered: Array<ReporteMantenimiento> = []


    reporteMantenimientoList.filter(f => f.idProductoRepuestoReporte !== null).forEach(element => {
      reporteMantenimientoListFiltered.push(element);
    });

    arrayCorrectivo.forEach(catalogo => {
      detalleCatalogoReporte = new DetalleCatalogoReporte();
      detalleCatalogoReporte = catalogo;

      let aux: ProductoRepuestoReporte = this.productoRepReporte(detalleCatalogoReporte, productoRepuestoReportes);

      if (reporteMantenimientoListFiltered.length > 0) {


        for (var n = 0; n <= reporteMantenimientoListFiltered.length - 1; n++) {
          if (reporteMantenimientoListFiltered[n].idProductoRepuestoReporte.idDetalleCatalogoReporte.id === detalleCatalogoReporte.id) {
            if (aux !== null) {
              detalleCatalogoReporte = aux.idDetalleCatalogoReporte;
              detalleCatalogoReporte.seleccion = true;
              break
            } else {
              detalleCatalogoReporte.idReporteMantenimiento = reporteMantenimientoListFiltered[n].id;
            }
            break;
          } else {
            if (aux !== null) {
              detalleCatalogoReporte.idProductoRepuestoReporte = aux.id;
              detalleCatalogoReporte.seleccion = true;
            }
          }
        }
      } else {
        if (aux !== null) {
          detalleCatalogoReporte.idProductoRepuestoReporte = aux.id;
          detalleCatalogoReporte.seleccion = true;
          detalleCatalogoReporte.codigoRepuesto = aux.idProducto.codigoFabricante + '';
          detalleCatalogoReporte.porcentaje = aux.porcentaje;
          detalleCatalogoReporte.tipoRepuesto = aux.cambiado ? 'C' : 'S';
        }
      }
      listRes.push(detalleCatalogoReporte);
    });


    return listRes;
  }

  private listPrev(ids: any, catalogos: Array<DetalleCatalogoReporte>) {
    let list: Array<DetalleCatalogoReporte> = [];
    let catalogo: DetalleCatalogoReporte;

    let idSelected: number;
    catalogos.forEach(catalogo_ => {
      catalogo = new DetalleCatalogoReporte()
      catalogo = catalogo_;

      for (var n = 0; n <= ids.length - 1; n++) {
        idSelected = parseInt(ids[n] + '');
        if (idSelected === catalogo.id) {
          catalogo.seleccion = true;
          break;
        } else {
          catalogo.seleccion = false;
        }
      }
      list.push(catalogo);
    });
    return list;
  }

  private listCorr(ids: any) {
    let list: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    let obj: DetalleCatalogoReporte;

    ids.forEach(data => {
      obj = new DetalleCatalogoReporte();
      obj.idProductoRepuestoReporte = data.id;
      obj.codigoRepuesto = data.idProducto.codigoFabricante;
      obj.cambiado = data.cambiado;
      obj.solicitar = data.solicitar;
      obj.porcentaje = data.porcentaje;
      obj.tipoRepuesto = obj.cambiado ? 'C' : 'S';
      obj.seleccion = true;
      list.push(obj);

    });

    return list;
  }

  private loadReportePreventivos(repuestos: Array<DetalleCatalogoReporte>, reporteMantenimientoList: Array<ReporteMantenimiento>) {

    let list: Array<DetalleCatalogoReporte> = [];
    let catalogo: DetalleCatalogoReporte;

    repuestos.forEach(catalogoReporte => {
      catalogo = new DetalleCatalogoReporte();
      catalogo = catalogoReporte;

      reporteMantenimientoList.filter(sw => sw.idDetalleCatalogoReporte !== null).forEach(mantenimiento => {
        if (catalogoReporte.id === mantenimiento.idDetalleCatalogoReporte.id && mantenimiento.estado === true) {
          catalogo.seleccion = true;
          catalogo.idReporteMantenimiento = mantenimiento.id;
        }
      });

      list.push(catalogo);

    });


    return list;
  }

  private loadReportePreventivosIds(arrayPreventivos: Array<DetalleCatalogoReporte>, reporteMantenimientoList: Array<ReporteMantenimiento>) {
    let idList = [Number];
    if (arrayPreventivos !== null && reporteMantenimientoList !== null) {
      arrayPreventivos.forEach(catalogo => {
        reporteMantenimientoList.filter(sw => sw.idDetalleCatalogoReporte !== null).forEach(element => {
          if (element.idDetalleCatalogoReporte.id === catalogo.id) {
            this.someData = catalogo.id;
            idList.push(this.someData);
          }
        });
      });
    }
    return idList;
  }

  private loadReporteCorrectivosIds(arrayPreventivos: Array<DetalleCatalogoReporte>, reporteMantenimientoList: Array<ReporteMantenimiento>) {
    let idList = [Number];
    if (arrayPreventivos !== null && reporteMantenimientoList !== null) {
      arrayPreventivos.forEach(catalogo => {
        reporteMantenimientoList.filter(sw => sw.idProductoRepuestoReporte !== null).forEach(element => {
          if (element.idDetalleCatalogoReporte.id === catalogo.id) {
            this.someData = catalogo.id;
            idList.push(this.someData);
          }
        });
      });
    }
    return idList;
  }

  private llenarRepuestos(tipo: String, productoRepuestoReporte: ProductoRepuestoReporte): void {
    if (tipo === 'SUMINISTROS') {
      this.arrayCorrectivoRepuestosSuministros.push(productoRepuestoReporte);
      this.visibleCorrectivosBtns[0] = true;
    } if (tipo === 'IMAGEN_CORRECTIVO') {
      this.arrayCorrectivoRepuestosImagen.push(productoRepuestoReporte);
      this.visibleCorrectivosBtns[1] = true;
    } if (tipo === 'FIJACION_CORRECTIVO') {
      this.arrayCorrectivoRepuestosFijacion.push(productoRepuestoReporte);
      this.visibleCorrectivosBtns[2] = true;
    } if (tipo === 'REVELADO') {
      this.arrayCorrectivoRepuestosRevelado.push(productoRepuestoReporte);
      this.visibleCorrectivosBtns[3] = true;
    } if (tipo === 'ALIMENTACION') {
      this.arrayCorrectivoRepuestosAlimentacion.push(productoRepuestoReporte);
      this.visibleCorrectivosBtns[4] = true;
    }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  prueba() {

  }

  ionViewDidLoad() {
  }

  public openModalCliente() {

    let addModal = this.modalCtrl.create('ModalSearchClientePage');
    addModal.onDidDismiss(item => {
      if (item !== undefined) {
        this.cliente = item;


        this.clienteSucursalProvider.getByIdCliente(this.cliente.id).subscribe(data => {

          this.clienteSucursales = data;
        });
      }

    })
    addModal.present();
  }

  public openModalProducto() {

    let addModal = this.modalCtrl.create('ModalSearchProductoPage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.producto = item;
        this.marca = this.producto.idModelo.idMarca;
        this.modelo = this.producto.idModelo;
      }
    })
    addModal.present();
  }

  public openModalCorrectivos(cabecera: string) {
    this.showLoader();
    let addModal = this.modalCtrl.create('ModalCorrectivosPage', { cabecera: cabecera, producto: this.producto });
    addModal.onDidDismiss(item => {
      if ((item) && item.productoRepuestoReporte !== undefined) {
        this.llenarRepuestos(item.cabecera, item.productoRepuestoReporte);
      }
    }

    );
    addModal.present();

    this.loading.dismiss();
  }

  public openModalCorrectivosSeleccionados(tipo: string) {
    this.showLoader();

    let repuestos;
    if (tipo === 'SUMINISTROS') {
      repuestos = this.arrayCorrectivoRepuestosSuministros;
    } if (tipo === 'IMAGEN_CORRECTIVO') {
      repuestos = this.arrayCorrectivoRepuestosImagen;
    } if (tipo === 'FIJACION_CORRECTIVO') {
      repuestos = this.arrayCorrectivoRepuestosFijacion;
    } if (tipo === 'REVELADO') {
      repuestos = this.arrayCorrectivoRepuestosRevelado;
    } if (tipo === 'ALIMENTACION') {
      repuestos = this.arrayCorrectivoRepuestosAlimentacion;
    }
    let addModal = this.modalCtrl.create('ModalRepuestosSeleccionadosPage', { cabecera: tipo, arrayRepuestos: repuestos });

    addModal.onDidDismiss(item => {

      if (item.arrayRepuestos !== undefined) {

        this.actualizarRepuestos(item.cabecera, item.arrayRepuestos);
      }

    })
    addModal.present();
    this.loading.dismiss();
  }

  private actualizarRepuestos(tipo: String, arrayCorrectivos: Array<ProductoRepuestoReporte>): void {
    if (tipo === 'SUMINISTROS') {

      this.arrayCorrectivoRepuestosSuministros = arrayCorrectivos;
    } if (tipo === 'IMAGEN_CORRECTIVO') {

      this.arrayCorrectivoRepuestosImagen = arrayCorrectivos;
    } if (tipo === 'FIJACION_CORRECTIVO') {

      this.arrayCorrectivoRepuestosFijacion = arrayCorrectivos;
    } if (tipo === 'REVELADO') {

      this.arrayCorrectivoRepuestosRevelado = arrayCorrectivos;
    } if (tipo === 'ALIMENTACION') {

      this.arrayCorrectivoRepuestosAlimentacion = arrayCorrectivos;
    }
  }

  public contador(valor: any) {

    if (this.productoDetalleReporte.contadorColorAnterior == undefined || this.productoDetalleReporte.contadorColorAnterior === null) {
      this.productoDetalleReporte.contadorColorAnterior = 0;
    }
    if (this.productoDetalleReporte.contadorBnAnterior == undefined || this.productoDetalleReporte.contadorBnAnterior === null) {
      this.productoDetalleReporte.contadorBnAnterior = 0;
    }
    if (this.productoDetalleReporte.contadorColorActual == undefined || this.productoDetalleReporte.contadorColorActual === null) {
      this.productoDetalleReporte.contadorColorActual = 0;
    }
    if (this.productoDetalleReporte.contadorBnActual == undefined || this.productoDetalleReporte.contadorBnActual === null) {
      this.productoDetalleReporte.contadorBnActual = 0;
    }


    this.productoDetalleReporte.contadorTotalAnterior = parseFloat(this.productoDetalleReporte.contadorColorAnterior + '') +
      parseFloat(this.productoDetalleReporte.contadorBnAnterior + '');

    this.productoDetalleReporte.contadorTotalActual = parseFloat(this.productoDetalleReporte.contadorColorActual + '') +
      parseFloat(this.productoDetalleReporte.contadorBnActual + '');


    this.productoDetalleReporte.contadorTotalImpReal = parseFloat(this.productoDetalleReporte.contadorTotalAnterior + '') +
      parseFloat(this.productoDetalleReporte.contadorTotalActual + '');


    this.productoDetalleReporte.contadorColorImpReal = parseFloat(this.productoDetalleReporte.contadorColorAnterior + '') -
      parseFloat(this.productoDetalleReporte.contadorColorActual + '');

    this.productoDetalleReporte.contadorBnImpReal = parseFloat(this.productoDetalleReporte.contadorBnAnterior + '') -
      parseFloat(this.productoDetalleReporte.contadorBnActual + '');


  }


  public presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmación',
      message: 'Esta seguro de guardar este Reporte?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: () => {
            this.guardar();
          }
        }
      ]
    });
    alert.present();
  }



  ngAfterViewInit() {
    // this.signaturePad is now available
    //  this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    //   this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  public clearSignature() {
    this.signaturePad.clear();

  }

  private llenarCatalogosPreventivos(): void {


    this.tipoVisitaProvider.getAllTipoVisitas().subscribe(data => {
      this.tiposVisitas = data;
    });

    //this.showLoader();
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('PROCESAMIENTO').subscribe(data => {
      this.arrayPreventivoProcesamiento = data;
      //   this.loading.dismiss();
    })

    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('IMAGEN_PREVENTIVO').subscribe(data => {
      this.arrayPreventivoImagen = data;
    })
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('FIJACION_PREVENTIVO').subscribe(data => {
      this.arrayPreventivoFijacion = data;
    })
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('EXTERIORES').subscribe(data => {
      this.arrayPreventivoExteriores = data;
    })



  }

  private llenarCatalogosCorrectivos(): void {
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('SUMINISTROS').subscribe(data => {
      this.arrayCorrectivoSuministros = data;
    });
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('IMAGEN_CORRECTIVO').subscribe(data => {
      this.arrayCorrectivoImagen = data;
    });
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('FIJACION_CORRECTIVO').subscribe(data => {
      this.arrayCorrectivoFijacion = data;
    });
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('REVELADO').subscribe(data => {
      this.arrayCorrectivoRevelado = data;
    });
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('ALIMENTACION').subscribe(data => {
      this.arrayCorrectivoAlimentacion = data;
    });

  }


  public showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    this.loading.present();
  }

  public showLoaderSave() {
    this.loading = this.loadingCtrl.create({
      content: 'Procesando...'
    });

    this.loading.present();
  }

  private createMyForm() {
    return this.formBuilder.group({
      reporteSegment: [],
      cliente: [''],
      ruc: [''],

      atencion: [this.productoClienteReporte.atencion, Validators.required],
      ipEquipo: [this.productoClienteReporte.ipEquipo, Validators.required],
      puertoUsb: [this.productoClienteReporte.puertoUsb],

      direccion: [''],
      ciudad: [''],
      email: [''],

      telefono: [''],
      telefono2: [''],
      idTipoVisita: [this.tipoVisita.id, Validators.required],
      idClienteSucursal: [this.clienteSucursal.id, Validators.required],
      facturaCtrl: [this.reporte.factura],

      referenciaCtrl: [this.reporte.referencia, ''],

      equipoProducto: [''],
      marca: [''],
      modelo: [''],
      serie: [],
      contadorTotalAnterior: [''],
      contadorColorAnterior: [],
      contadorBnAnterior: [],
      contadorTotalActual: [],
      contadorColorActual: [],
      contadorBnActual: [],
      contadorTotalImpReal: [],
      contadorColorImpReal: [],
      contadorBnImpReal: [],
      mantenimiento: [],
      otros: [],
      servicioFacturar: [],
      servicioFacturarEstado: [],
      observacionesRecomendaciones: [],
      notas: [],
      sintomas: [],

      nulo: [],

      botonCliente: [],
      sortButton: [],
      busqueda: [],

      signature: [this.reporte.firmaClienteBase64, ''],
      lista1: [], lista2: [], lista3: [], lista4: [], lista5: [], lista6: [],
      lista7: [], lista8: [], lista9: [], lista10: [], lista11: [], lista12: [],


    });
  }

  msgToast(succes: boolean) {
    let msg: string;
    let css_Class: string;

    if (succes) {
      msg = "Reporte Guardado Correctamente";
      css_Class = "toastSucces";
    } else {
      msg = "Error al guardar el Reporte";
      css_Class = "toastError";
    }

    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass: css_Class
    });

    toast.onDidDismiss(() => {
     
    });

    toast.present();
  }

}
