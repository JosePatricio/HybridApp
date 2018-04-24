import { Component, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ToastController, AlertController, Platform, PopoverController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Cliente, Producto, Modelo, Marca, ProductoDetalleReporte, TipoVisitas, DetalleCatalogoReporte, Reporte, ProductoRepuestoReporte, Usuario,
  DetalleInventarioProducto, ClienteSucursal, ProductoClienteReporte, Proyectos,
  DatosReporteDTO, AsignacionReparaciones, ReporteMantenimiento, ReporteGenericoItems
} from '../../models/models';
import { DetalleCatalogoReporteProvider, TipoVisitaProvider, ClienteProvider, ReporteProvider, ClienteSucursalProvider, Api, NotificacionProvider, UtilesProvider } from '../../providers/providers';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { AdministracionReportesPage } from '../administracion-reportes/administracion-reportes';

import { Vibration } from '@ionic-native/vibration';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NotificationsPage } from '../notifications/notifications';

/**
 * Generated class for the ReporteGenericoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reporte-generico',
  templateUrl: 'reporte-generico.html',
})
export class ReporteGenericoPage {

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 500,
    'canvasHeight': 300
  };


  detalles: Array<DetalleCatalogoReporte>;
  tiposVisitas: Array<TipoVisitas>;
  clienteSucursales: Array<ClienteSucursal> = new Array<ClienteSucursal>();





  arrayRepuestosGenericosPreventivos: Array<ReporteGenericoItems> = new Array<ReporteGenericoItems>();
  arrayRepuestosGenericosCorrectivos: Array<ReporteGenericoItems> = new Array<ReporteGenericoItems>();



  arrayRepuestosGenericosPreventivos_: Array<ReporteGenericoItems> = [];
  arrayRepuestosGenericosCorrectivos_: Array<ReporteGenericoItems> = [];



  reporteGenericoItemsListTemp: Array<ReporteGenericoItems> = [];

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
    , private zone: NgZone, private vibration: Vibration, public popoverCtrl: PopoverController,
    private localNotifications: LocalNotifications
  ) {






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
    this.detalleCatalogoReporteProvider.getCabeceraCatalogoReportesByTipo('CORRECTIVO').
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

        this.tipoVisitaProvider.getAllTipoVisitas().subscribe(data => {
          this.tiposVisitas = data;
        });


        //TEXTO DEFAULT CONTADORES 
        this.productoDetalleReporte.etiquetaAnterior = 'Anterior';
        this.productoDetalleReporte.etiquetaActual = 'Actual';
        this.productoDetalleReporte.etiquetaImpresionReal = 'Impr. Real';
        this.productoDetalleReporte.etiquetaContadorTotal = 'Total';
        this.productoDetalleReporte.etiquetaContadorColor = 'Color';
        this.productoDetalleReporte.etiquetaContadorBn = 'B/N';


        //NUEVO REPORTE
        this.reporte.numerofactura = this.numeroReporte;
        this.reporte.tipo = 'REPORTE_GENERICO';
        this.reporte.idUsuario = this.usuario;
        this.reporte.estado = 'PROCESANDO';

      }
    }
  }

  public segmentChanged(event) {
    this.zone.run(() => {
      this.reporteTab = event.value;
    });
  }


  public addItemGenerico(): void {

  }


  public onChange(subtipo) {
    this.tipoReporte = subtipo;
    this.reporteProvider.numeroReporteFormateado(this.usuario.id, 'REPORTE_GENERICO', subtipo).subscribe(
      data => {
        this.numeroReporteTecnico = data['valor'];
      }
    );

    this.reporteProvider.numeroReporte(this.usuario.id, 'REPORTE_GENERICO', subtipo).subscribe(
      data => {
        this.numeroReporte = data['valor'];
      }
    );

  }


  private llenarReportePorNotificacion(asignacionReparaciones: AsignacionReparaciones): void {



    this.cliente = asignacionReparaciones.idClienteSucursal.idCliente;
    this.clienteSucursal = asignacionReparaciones.idClienteSucursal;
    this.producto = asignacionReparaciones.producto;
    this.modelo = asignacionReparaciones.producto.idModelo;
    this.marca = asignacionReparaciones.producto.idModelo.idMarca;

    this.detalleInventarioProducto.serial = asignacionReparaciones.serial;

    this.productoClienteReporte.correoAtencion = asignacionReparaciones.idClienteSucursal.idCliente.email;

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


      etiquetaAnterior: this.productoDetalleReporte.etiquetaAnterior,
      etiquetaActual: this.productoDetalleReporte.etiquetaActual,
      etiquetaImpresionReal: this.productoDetalleReporte.etiquetaImpresionReal,
      etiquetaContadorTotal: this.productoDetalleReporte.etiquetaContadorTotal,
      etiquetaContadorColor: this.productoDetalleReporte.etiquetaContadorColor,
      etiquetaContadorBn: this.productoDetalleReporte.etiquetaContadorBn,

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



      data.reporteGenericoItemsList.filter(f => f.tipo == 'P').forEach(data => {
        let reporteGenericoItems: ReporteGenericoItems = new ReporteGenericoItems();
        reporteGenericoItems = data;
        reporteGenericoItems.seleccion = true;
        this.arrayRepuestosGenericosPreventivos.push(reporteGenericoItems);


      });


      data.reporteGenericoItemsList.filter(f => f.tipo == 'C').forEach(data => {
        let reporteGenericoItems: ReporteGenericoItems = new ReporteGenericoItems();
        reporteGenericoItems = data;
        reporteGenericoItems.seleccion = true;
        this.arrayRepuestosGenericosCorrectivos.push(reporteGenericoItems);
      });


      this.reporteGenericoItemsListTemp = data.reporteGenericoItemsList;





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
        email: this.productoClienteReporte.correoAtencion,


        etiquetaAnterior: this.productoDetalleReporte.etiquetaAnterior,
        etiquetaActual: this.productoDetalleReporte.etiquetaActual,
        etiquetaImpresionReal: this.productoDetalleReporte.etiquetaImpresionReal,
        etiquetaContadorTotal: this.productoDetalleReporte.etiquetaContadorTotal,
        etiquetaContadorColor: this.productoDetalleReporte.etiquetaContadorColor,
        etiquetaContadorBn: this.productoDetalleReporte.etiquetaContadorBn,

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


  private guardar(): void {


    this.reporte.referencia = this.reporteForm.value.referenciaCtrl;
    this.reporte.factura = this.reporteForm.value.facturaCtrl;
    this.reporte.sintomasEquipo = this.reporteForm.value.sintomas;
    this.reporte.subtipo = this.reporteForm.value.subTipoReporte;
    this.reporte.observacionesRecomendaciones = this.reporteForm.value.observacionesRecomendaciones;
    this.reporte.notas = this.reporteForm.value.notas;
    this.reporte.firmaClienteBase64 = this.signaturePad.toDataURL();

    this.reporte.horaInicio = this.utilesProvider.horaActual(this.reporteForm.value.horaInicio);
    this.reporte.horaFin = this.utilesProvider.horaActual(this.reporteForm.value.horaFin);


    this.reporte.idVisita.id = this.reporteForm.value.idTipoVisita;


    this.productoClienteReporte.idProyecto = this.proyecto;
    this.productoClienteReporte.atencion = this.reporteForm.value.atencion;
    this.productoClienteReporte.ipEquipo = this.reporteForm.value.ipEquipo;
    this.productoClienteReporte.puertoUsb = this.reporteForm.value.puertoUsb;
    this.productoClienteReporte.correoAtencion = this.reporteForm.value.email;
    this.productoClienteReporte.idCliente = this.cliente;
    this.productoClienteReporte.idClienteSucursal.id = this.reporteForm.value.idClienteSucursal;
    this.productoClienteReporte.idProducto = this.producto;


    this.productoDetalleReporte.etiquetaAnterior = this.reporteForm.value.etiquetaAnterior;
    this.productoDetalleReporte.etiquetaActual = this.reporteForm.value.etiquetaActual;
    this.productoDetalleReporte.etiquetaImpresionReal = this.reporteForm.value.etiquetaImpresionReal;
    this.productoDetalleReporte.etiquetaContadorTotal = this.reporteForm.value.etiquetaContadorTotal;
    this.productoDetalleReporte.etiquetaContadorColor = this.reporteForm.value.etiquetaContadorColor;
    this.productoDetalleReporte.etiquetaContadorBn = this.reporteForm.value.etiquetaContadorBn;


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
     
      
      this.datosReporteDTO.itemsReporteGenerico = this.utilesProvider.cargarRepuestoGenericosCorrectivo(this.reporteGenericoItemsListTemp, this.arrayRepuestosGenericosCorrectivos).concat(
        this.utilesProvider.cargarRepuestoGenericosPreventivo(this.reporteGenericoItemsListTemp, this.arrayRepuestosGenericosPreventivos)
      );

      console.log('EDITAR');
      console.log(this.datosReporteDTO);

      this.showLoaderSave();

      this.reporteProvider.updateReporteReporteGenerico(this.datosReporteDTO).then(
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


      this.datosReporteDTO.itemsReporteGenerico = this.arrayRepuestosGenericosCorrectivos.concat(this.arrayRepuestosGenericosPreventivos);


      if (this.utilesProvider.validarCampos(this.productoClienteReporte, this.reporte, this.detalleInventarioProducto)) {

        this.showLoaderSave();
        this.reporteProvider.saveReporteReporteGenerico(this.datosReporteDTO).then(
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




  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }



  ionViewDidLoad() {
  }

  public openModalCliente() {
    let addModal = this.modalCtrl.create('ModalSearchClientePage');
    addModal.onDidDismiss(item => {
      if ((item) && item !== undefined) {
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




  public openModalGenericosPreventivo() {

    let addModal = this.modalCtrl.create('ModalItemsGenericosPreventivoPage', { arrayRepuestosPreventivos: this.arrayRepuestosGenericosPreventivos });

    addModal.onDidDismiss(item => {
      if (item) {
        this.arrayRepuestosGenericosPreventivos = item.arrayRepuestosPreventivos;
      }
    })
    addModal.present();
  }
  public openModalGenericosCorrectivo() {

    let addModal = this.modalCtrl.create('ModalItemsGenericosCorrectivoPage', { arrayRepuestosCorrectivos: this.arrayRepuestosGenericosCorrectivos });
    addModal.onDidDismiss(item => {
      if (item) {
        this.arrayRepuestosGenericosCorrectivos = item.arrayRepuestosCorrectivos;
      }
    })
    addModal.present();
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
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
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

      etiquetaAnterior: [],
      etiquetaActual: [],
      etiquetaImpresionReal: [],
      etiquetaContadorTotal: [],
      etiquetaContadorColor: [],
      etiquetaContadorBn: [],

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







}
