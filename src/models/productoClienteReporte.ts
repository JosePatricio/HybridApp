import { Reporte, ProductoDetalleReporte, ClienteSucursal, Producto, Cliente, ReporteMantenimiento, DetalleInventarioProducto, Proyectos, ReporteGenericoItems } from '../models/models';

export class ProductoClienteReporte {



    id: number;
    serie: String;
    atencion: String;
    departamento: String;
    ciudad: String;
    ipEquipo: String;
    puertoUsb: String;
    correoAtencion: String;
    idReporte: Reporte = new Reporte();
    idProductoDetalleReporte: ProductoDetalleReporte = new ProductoDetalleReporte();
    idClienteSucursal: ClienteSucursal = new ClienteSucursal();
    idCliente: Cliente = new Cliente();
    idProducto: Producto = new Producto();
    idProyecto: Proyectos = new Proyectos();
    reporteMantenimientoList: Array<ReporteMantenimiento> = new Array<ReporteMantenimiento>();
    reporteGenericoItemsList: Array<ReporteGenericoItems> = new Array<ReporteGenericoItems>();
    idDetalleInventarioProducto: DetalleInventarioProducto = new DetalleInventarioProducto();
}

