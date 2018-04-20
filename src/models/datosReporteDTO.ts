import { Reporte, Cliente, Producto, ProductoDetalleReporte, Usuario,
     AsignacionReparaciones, DetalleCatalogoReporte, ProductoClienteReporte, ReporteGenericoItems } 
     from '../models/models';
export class DatosReporteDTO {



    reporte: Reporte = new Reporte();

    cliente: Cliente = new Cliente();

    producto: Producto = new Producto();

    serie: String;

    productoDetalleReporte: ProductoDetalleReporte = new ProductoDetalleReporte();

    productoClienteReporte: ProductoClienteReporte = new ProductoClienteReporte();

    idClienteSucursal: number;

    idTipoVisita: number;

    usuarios: Usuario;

    asignacionReparacion: AsignacionReparaciones = new AsignacionReparaciones();

    idProyecto: number;


    lista1: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista2: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista3: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista4: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista5: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista6: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista7: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista8: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista9: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista10: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista11: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();
    lista12: Array<DetalleCatalogoReporte> = new Array<DetalleCatalogoReporte>();


    itemsReporteGenerico: Array<ReporteGenericoItems> = new Array<ReporteGenericoItems>();

}

