
import { ProductoRepuestoReporte, DetalleCatalogoReporte } from '../models/models';
export class ReporteMantenimiento {

    id: number;
    codigoRepuesto: string;
    tipoRepuesto: string;
    porcentaje: number;
    estado: boolean;
    idProductoRepuestoReporte: ProductoRepuestoReporte = new ProductoRepuestoReporte();
    idDetalleCatalogoReporte: DetalleCatalogoReporte = new DetalleCatalogoReporte();

}

