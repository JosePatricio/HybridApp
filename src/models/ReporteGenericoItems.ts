
import { ProductoRepuestoReporte } from '../models/models';
export class ReporteGenericoItems {


    id: number;
    tipo: string;
    descripcion: string;
    cambiado: boolean;
    solicitar: boolean;
    codigoRepuesto: string;
    porcentaje: number;
    estado: boolean;
    seleccionado: boolean;
    seleccion: boolean;
    idProductoRepuestoReporte: ProductoRepuestoReporte = new ProductoRepuestoReporte();

}

