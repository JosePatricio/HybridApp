import { Component, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ToastController, AlertController, Platform, PopoverController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Cliente, Producto, Modelo, Marca, ProductoDetalleReporte, TipoVisitas, DetalleCatalogoReporte, Reporte, ProductoRepuestoReporte, Usuario,
  DetalleInventarioProducto, ClienteSucursal, ProductoClienteReporte, Proyectos,
  DatosReporteDTO, AsignacionReparaciones, ReporteMantenimiento
} from '../../models/models';
import { DetalleCatalogoReporteProvider, TipoVisitaProvider, ClienteProvider, ReporteProvider, ClienteSucursalProvider, Api, NotificacionProvider, UtilesProvider } from '../../providers/providers';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { AdministracionReportesPage } from '../administracion-reportes/administracion-reportes';


/**
 * Generated class for the ReporteScannersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reporte-scanners',
  templateUrl: 'reporte-scanners.html',
})
export class ReporteScannersPage {


  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 500,
    'canvasHeight': 300
  };


  detalles: Array<DetalleCatalogoReporte>;
  tiposVisitas: Array<TipoVisitas>;
  clienteSucursales: Array<ClienteSucursal> = new Array<ClienteSucursal>();

  arrayPreventivoPreventivoRodilloTransporte: Array<DetalleCatalogoReporte> = [];
  arrayPreventivoPreventivoRodilloTransporteIds = [Number];


  arrayPreventivoPreventivoExteriorScanners: Array<DetalleCatalogoReporte> = [];
  arrayPreventivoPreventivoExteriorScannersIds = [Number];

  arrayPreventivoPreventivoPartesElectricasScanners: Array<DetalleCatalogoReporte> = [];
  arrayPreventivoPreventivoPartesElectricasScannersIds = [Number];


  arrayCorrectivoRepuestosSuministros: Array<ProductoRepuestoReporte> = new Array<ProductoRepuestoReporte>();
  arrayCorrectivoRepuestosPartesElectricas: Array<ProductoRepuestoReporte> = new Array<ProductoRepuestoReporte>();
  arrayCorrectivoRepuestosMecanismoInterno: Array<ProductoRepuestoReporte> = new Array<ProductoRepuestoReporte>();
 
  
  arrayCorrectivoSuministros: Array<DetalleCatalogoReporte> = [];
  arrayCorrectivoPartesElectricas: Array<DetalleCatalogoReporte> = [];
  arrayCorrectivoMecanismoInterno: Array<DetalleCatalogoReporte> = [];

  

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
  asignacionReparaciones: AsignacionReparaciones;

  private isEdit: boolean;
  public someData: any;
  public tipoReporte: string;
  public subTipoReporte: string;
  public horaReporteInicio: any;
  public horaReporteFin: any;

  numeroReporteTecnico: string;
  numeroReporte: number;

  reporteForm: FormGroup;
  reporteTab: any;
  loading: any;
  public colorNotification: string = 'light';
  public notificationes: number;

  visibleCorrectivosBtns: Array<Boolean> = [false, false, false, false, false, false];
  nombreListaCorrectivo: Array<string> = [];

  public signatureImage: string = 'light';

  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public modalCtrl: ModalController,
    public loadingCtrl: LoadingController, private platform: Platform,
    public detalleCatalogoReporteProvider: DetalleCatalogoReporteProvider, public clienteProvider: ClienteProvider, public api: Api, public utilesProvider: UtilesProvider,
    public tipoVisitaProvider: TipoVisitaProvider, public reporteProvider: ReporteProvider, public notificacionProvider: NotificacionProvider
    , public clienteSucursalProvider: ClienteSucursalProvider, private cdRef: ChangeDetectorRef, private toastCtrl: ToastController, private alertCtrl: AlertController
    , private zone: NgZone, public popoverCtrl: PopoverController
  ) {






  }



  ionViewDidLoad() {

  }

  ngOnInit() {

    this.initForm();


  }

  initForm(): void {

    this.reporteForm = this.createMyForm();

    let user: Usuario = JSON.parse(localStorage.getItem("AUTENTHICATION"));
    this.isEdit = (this.navParams.get('isEdit') === true);

    this.usuario.id = user.id;
    this.usuario.usuario = user.usuario;
    this.usuario.codigo = user.codigo;
    this.usuario.nombreCompleto = user.nombreCompleto;

    this.notificationes = this.notificacionProvider.getnumeroNotificacion();
    this.colorNotification = this.notificationes == 0 ? 'light' : 'danger';

    /*   NOMBRE BOTONES CORRECTIVOS  */
    this.detalleCatalogoReporteProvider.getCabeceraCatalogoReportesByTipo('CORRECTIVO_SCANNERS').
      subscribe(data => {
        let c: number = 0;
        data.forEach(x => {
          this.nombreListaCorrectivo[c] = x.descripcion;
          c++;
        });

      });
    /*                                */


    if (this.navParams.get('notification') !== undefined) {
      //REPORTE DESDE NOTIFICACION
      this.reporteTab = 'datos';

      let notificacionReporte: AsignacionReparaciones;
      notificacionReporte = JSON.parse(this.navParams.get('notification'));

      this.llenarReportePorNotificacion(notificacionReporte);


    }
    else {
      //EDICION REPORTE


      if (this.navParams.get('tabReporte') === undefined) {
        this.reporteTab = 'datos';
      }
      else {
        this.reporteTab = this.navParams.get('tabReporte');
      }

      if (this.navParams.get('reporteDto') !== undefined) {
        let idReporte: number = this.navParams.get('reporteDto')['id'];
        this.llenarReportePorId(idReporte);


      }

      else {

        console.log('ES NUEVO REPORTE   ');
        //NUEVO REPORTE
        this.llenarCatalogosPreventivos();
        this.reporte.numerofactura = this.numeroReporte;
        this.reporte.tipo = 'SCANNERS';
        this.reporte.idUsuario = this.usuario;
        this.reporte.estado = 'PROCESANDO';

      }
    }
  }


  private guardar(): void {


    this.reporte.referencia = this.reporteForm.value.referenciaCtrl;
    this.reporte.factura = this.reporteForm.value.facturaCtrl;
    this.reporte.sintomasEquipo = this.reporteForm.value.sintomas;
    this.reporte.subtipo = this.reporteForm.value.subTipoReporte;
    this.reporte.observacionesRecomendaciones = this.reporteForm.value.observacionesRecomendaciones;
    this.reporte.notas = this.reporteForm.value.notas;
    this.reporte.firmaClienteBase64 = this.signaturePad.toDataURL();

    this.reporte.idVisita.id=this.reporteForm.value.idTipoVisita;
    this.reporte.horaInicio = this.utilesProvider.horaActual(this.reporteForm.value.horaInicio);
    this.reporte.horaFin = this.utilesProvider.horaActual(this.reporteForm.value.horaFin);
    this.datosReporteDTO.reporte = this.reporte;

    this.productoClienteReporte.idProducto=this.producto;
    this.productoClienteReporte.idProyecto = this.proyecto;
    this.productoClienteReporte.atencion = this.reporteForm.value.atencion;
    this.productoClienteReporte.ipEquipo = this.reporteForm.value.ipEquipo;
    this.productoClienteReporte.puertoUsb = this.reporteForm.value.puertoUsb;
    this.productoClienteReporte.correoAtencion = this.reporteForm.value.email;
    this.productoClienteReporte.idCliente = this.cliente;
    this.productoClienteReporte.idClienteSucursal.id=this.reporteForm.value.idClienteSucursal;



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

    if (this.isEdit) {

      this.datosReporteDTO.lista1 = this.utilesProvider.listPrevEdition(this.arrayPreventivoPreventivoRodilloTransporteIds, this.arrayPreventivoPreventivoRodilloTransporte, this.reporteMantenimientoListTemp);
      this.datosReporteDTO.lista2 = this.utilesProvider.listPrevEdition(this.arrayPreventivoPreventivoExteriorScannersIds, this.arrayPreventivoPreventivoExteriorScanners, this.reporteMantenimientoListTemp);
      this.datosReporteDTO.lista3 = this.utilesProvider.listPrevEdition(this.arrayPreventivoPreventivoPartesElectricasScannersIds, this.arrayPreventivoPreventivoPartesElectricasScanners, this.reporteMantenimientoListTemp);
 
      this.datosReporteDTO.lista5 = this.utilesProvider.listCorrEdition(this.arrayCorrectivoRepuestosSuministros, this.reporteMantenimientoListTemp, this.arrayCorrectivoSuministros);
      this.datosReporteDTO.lista6 = this.utilesProvider.listCorrEdition(this.arrayCorrectivoRepuestosPartesElectricas, this.reporteMantenimientoListTemp, this.arrayCorrectivoPartesElectricas);
      this.datosReporteDTO.lista7 = this.utilesProvider.listCorrEdition(this.arrayCorrectivoRepuestosMecanismoInterno, this.reporteMantenimientoListTemp, this.arrayCorrectivoMecanismoInterno);
 
      this.showLoaderSave();

      this.reporteProvider.updateAllReporteImpresoras(this.datosReporteDTO).then(
        response => {
          this.navCtrl.push(AdministracionReportesPage);
          this.loading.dismiss();
          this.utilesProvider.msgSaveToast(true);
        }
      ).catch((error: any) => {
        this.utilesProvider.msgSaveToast(false);
        this.loading.dismiss();
      });

    } else {
      this.reporte.numerofactura = this.numeroReporte;

      this.datosReporteDTO.lista1 = this.utilesProvider.listPrev(this.arrayPreventivoPreventivoRodilloTransporteIds, this.arrayPreventivoPreventivoRodilloTransporte);
      this.datosReporteDTO.lista2 = this.utilesProvider.listPrev(this.arrayPreventivoPreventivoExteriorScannersIds, this.arrayPreventivoPreventivoExteriorScanners);
      this.datosReporteDTO.lista3 = this.utilesProvider.listPrev(this.arrayPreventivoPreventivoPartesElectricasScannersIds, this.arrayPreventivoPreventivoPartesElectricasScanners);

      this.datosReporteDTO.lista4 = this.utilesProvider.listCorr(this.arrayCorrectivoRepuestosSuministros);
      this.datosReporteDTO.lista5 = this.utilesProvider.listCorr(this.arrayCorrectivoRepuestosPartesElectricas);
      this.datosReporteDTO.lista6 = this.utilesProvider.listCorr(this.arrayCorrectivoRepuestosMecanismoInterno);

console.log('TAMANIO SELECCIONADO '+this.arrayPreventivoPreventivoRodilloTransporteIds.length);
console.log('LA LISTA 1 '+JSON.stringify(this.datosReporteDTO.lista1));

      if (this.utilesProvider.validarCampos(this.productoClienteReporte, this.reporte, this.detalleInventarioProducto)) {
      this.showLoaderSave();

      console.log(JSON.stringify(this.datosReporteDTO));
      this.reporteProvider.saveAllReporteImpresoras(this.datosReporteDTO).then(
        response => {
          this.navCtrl.push(AdministracionReportesPage);
          this.loading.dismiss();
          this.utilesProvider.msgSaveToast(true);
        }
      ).catch((error: any) => {
        this.utilesProvider.msgSaveToast(false);
        this.loading.dismiss();
      });

    }
  }


  }

  private llenarReportePorNotificacion(asignacionReparaciones: AsignacionReparaciones): void {

    this.llenarCatalogosPreventivos();

    this.cliente = asignacionReparaciones.idClienteSucursal.idCliente;
    this.clienteSucursal = asignacionReparaciones.idClienteSucursal;
    this.producto = asignacionReparaciones.producto;
    this.modelo = asignacionReparaciones.producto.idModelo;
    this.marca = asignacionReparaciones.producto.idModelo.idMarca;

    this.detalleInventarioProducto.serial = asignacionReparaciones.serial;
    this.productoClienteReporte.correoAtencion = this.cliente.email;

    this.clienteSucursalProvider.getByIdCliente(this.clienteSucursal.idCliente.id).subscribe(cs => {
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


    this.tipoVisita = asignacionReparaciones.idTipoVisita;
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



    this.reporteProvider.numeroReporteFormateado(this.usuario.id, 'REPORTE', asignacionReparaciones.tipoReporte).subscribe(
      data => {
        this.numeroReporteTecnico = data['valor'];
      }
    );

    this.reporteProvider.numeroReporte(this.usuario.id, 'REPORTE', asignacionReparaciones.tipoReporte).subscribe(
      data => {
        this.numeroReporte = data['valor'];
      }
    );

    this.tipoReporte = asignacionReparaciones.tipoReporte;

    this.reporteForm.patchValue({
      idTipoVisita: this.tipoVisita.id,
      idClienteSucursal: this.clienteSucursal.id,
      subTipoReporte: this.tipoReporte,

    });


  }



  private llenarReportePorId(idReporte: number): void {

    this.showLoader();
    this.reporteProvider.reportesById(idReporte).subscribe(data => {
      this.reporte.numerofactura = data.idReporte.numerofactura;
      this.numeroReporteTecnico = this.utilesProvider.formatoReporte(data.idReporte.numerofactura);

      this.productoClienteReporte = data;
      this.cliente = data.idCliente;
      this.reporte = data.idReporte;
      this.productoDetalleReporte = data.idProductoDetalleReporte;
      this.subTipoReporte = this.reporte.subtipo;

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

      this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('RODILLO_TRANSPORTE_PRE').subscribe(catalogo => {
        this.arrayPreventivoPreventivoRodilloTransporteIds = this.utilesProvider.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList);
        this.arrayPreventivoPreventivoRodilloTransporte = this.utilesProvider.loadReportePreventivos(catalogo, data.reporteMantenimientoList);
      });

      this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('EXTERIOR_SCANNER').subscribe(catalogo => {
        this.arrayPreventivoPreventivoExteriorScannersIds = this.utilesProvider.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList);
        this.arrayPreventivoPreventivoExteriorScanners = this.utilesProvider.loadReportePreventivos(catalogo, data.reporteMantenimientoList);
      });

      this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('PARTES_ELECTRICAS_SCANNER').subscribe(catalogo => {
        this.arrayPreventivoPreventivoPartesElectricasScanners = catalogo;
        this.arrayPreventivoPreventivoPartesElectricasScannersIds = this.utilesProvider.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList);
      });


      

      this.reporteMantenimientoListTemp = data.reporteMantenimientoList;

      //VISIVILIDAD BOTON VER CORRECTIVOS
      data.reporteMantenimientoList.filter(sw => sw.idProductoRepuestoReporte !== null).forEach(element => {

        this.llenarRepuestos(element.idProductoRepuestoReporte.idDetalleCatalogoReporte.idCabecera.codigo, element.idProductoRepuestoReporte);
      });
      //FIN VISIVILIDAD BOTON VER CORRECTIVOS


      this.horaReporteInicio = this.utilesProvider.horaActualFromDate(this.reporte.horaInicio).toISOString();
      this.horaReporteFin = this.utilesProvider.horaActualFromDate(this.reporte.horaFin).toISOString();


      
      /*                                   FILL FORM VALUES                                                                                             */
      this.reporteForm.patchValue({
        idTipoVisita: this.tipoVisita.id,
        idClienteSucursal: this.clienteSucursal.id,
        referenciaCtrl: this.reporte.referencia,
        facturaCtrl: this.reporte.factura,
        sintomas: this.reporte.sintomasEquipo,
        horaInicio: [this.horaReporteInicio],
        horaFin: [this.horaReporteFin],
        observacionesRecomendaciones: this.reporte.observacionesRecomendaciones,
        notas: this.reporte.notas,
        atencion: this.productoClienteReporte.atencion,
        ipEquipo: this.productoClienteReporte.ipEquipo,
        puertoUsb: this.productoClienteReporte.puertoUsb,
        email:this.productoClienteReporte.correoAtencion,

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
        servicioFacturarEstado: this.productoDetalleReporte.servicioFacturarEstado,
        subTipoReporte: this.subTipoReporte

      });
      /*                                 END  FILL FORM VALUES                                                                                             */

      this.loading.dismiss();

    });
  }

  private llenarRepuestos(tipo: String, productoRepuestoReporte: ProductoRepuestoReporte): void {
    if (tipo === 'SUMINISTROS_SCANNER') {
      this.arrayCorrectivoRepuestosSuministros.push(productoRepuestoReporte);
      this.visibleCorrectivosBtns[0] = true;
    } if (tipo === 'ELECTRICAS_SCANNER') {
      this.arrayCorrectivoRepuestosPartesElectricas.push(productoRepuestoReporte);
      this.visibleCorrectivosBtns[1] = true;
    } if (tipo === 'MECANISMO_SCANNER') {
      this.arrayCorrectivoRepuestosMecanismoInterno.push(productoRepuestoReporte);
      this.visibleCorrectivosBtns[2] = true;
    } 
  }

  public openModalCliente() {
    let addModal = this.modalCtrl.create('ModalSearchClientePage');
    addModal.onDidDismiss(item => {
      if ((item)&&item !== undefined) {
        this.cliente = item;
        this.productoClienteReporte.correoAtencion = item.email;
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
    if (tipo === 'SUMINISTROS_SCANNER') {
      repuestos = this.arrayCorrectivoRepuestosSuministros;
    } if (tipo === 'ELECTRICAS_SCANNER') {
      repuestos = this.arrayCorrectivoRepuestosPartesElectricas;
    } if (tipo === 'MECANISMO_SCANNER') {
      repuestos = this.arrayCorrectivoRepuestosMecanismoInterno;
    } 
    
    let addModal = this.modalCtrl.create('ModalRepuestosSeleccionadosPage', { cabecera: tipo, arrayRepuestos: repuestos });

    addModal.onDidDismiss(item => {
      if ((item.arrayRepuestos) && item.arrayRepuestos !== undefined) {
        this.actualizarRepuestos(item.cabecera, item.arrayRepuestos);
      }
    })
    addModal.present();
    this.loading.dismiss();
  }

  private actualizarRepuestos(tipo: String, arrayCorrectivos: Array<ProductoRepuestoReporte>): void {
    if (tipo === 'SUMINISTROS_SCANNER') {
      this.arrayCorrectivoRepuestosSuministros = arrayCorrectivos;
    } if (tipo === 'ELECTRICAS_SCANNER') {
      this.arrayCorrectivoRepuestosPartesElectricas = arrayCorrectivos;
    } if (tipo === 'MECANISMO_SCANNER') {
      this.arrayCorrectivoRepuestosMecanismoInterno = arrayCorrectivos;
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


  public clearSignature() {
    this.signaturePad.clear();

  }

  private llenarCatalogosPreventivos(): void {

    this.showLoader();
    this.tipoVisitaProvider.getAllTipoVisitas().subscribe(data => {
      this.tiposVisitas = data;
    });
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('RODILLO_TRANSPORTE_PRE').subscribe(data => {
      this.arrayPreventivoPreventivoRodilloTransporte = data;
    })
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('EXTERIOR_SCANNER').subscribe(data => {
      this.arrayPreventivoPreventivoExteriorScanners = data;
    })
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('PARTES_ELECTRICAS_SCANNER').subscribe(data => {
      this.arrayPreventivoPreventivoPartesElectricasScanners = data;
      this.loading.dismiss();
    })
    
    
  }

  private llenarCatalogosCorrectivos(): void {
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('SUMINISTROS_SCANNER').subscribe(data => {
      this.arrayCorrectivoSuministros = data;
    });
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('ELECTRICAS_SCANNER').subscribe(data => {
      this.arrayCorrectivoPartesElectricas = data;
    });
    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('MECANISMO_SCANNER').subscribe(data => {
      this.arrayCorrectivoMecanismoInterno = data;
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

  public presentNotifications(myEvent) {
    console.log(myEvent);
    /*  let popover = this.popoverCtrl.create(NotificationsPage);
      popover.present({
        ev: myEvent
      });*/
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
      horaInicio: [],
      horaFin: [],
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
      subTipoReporte: [],
      botonCliente: [],
      sortButton: [],
      busqueda: [],

      signature: [this.reporte.firmaClienteBase64, ''],
      lista1: [], lista2: [], lista3: [], lista4: [], lista5: [], lista6: [],
      lista7: [], lista8: [], lista9: [], lista10: [], lista11: [], lista12: [],


    });
  }
  public segmentChanged(event) {
    this.zone.run(() => {
      this.reporteTab = event.value;
    });
  }
  public onChange(subtipo) {
    this.tipoReporte = subtipo;
    this.reporteProvider.numeroReporteFormateado(this.usuario.id, 'SCANNERS', subtipo).subscribe(
      data => {
        this.numeroReporteTecnico = data['valor'];
      }
    );

    this.reporteProvider.numeroReporte(this.usuario.id, 'SCANNERS', subtipo).subscribe(
      data => {
        this.numeroReporte = data['valor'];
      }
    );

  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }


}
