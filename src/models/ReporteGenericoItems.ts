
import {  ProductoClienteReporte } from '../models/models';
export class ReporteGenericoItems {


    id: number;
    tipo: string;
    descripcion: string;
    cambiado: boolean;
    solicitar: boolean;
    porcentaje: number;
    estado: boolean;
    seleccionado: boolean;
    seleccion: boolean;
    codigoRepuesto: String;
    idProductoClienteReporte: ProductoClienteReporte = new ProductoClienteReporte();

}

