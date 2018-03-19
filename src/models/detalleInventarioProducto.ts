/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */


import { DetalleInventario } from '../models/models';
export class DetalleInventarioProducto {


    id: number;

    serial: String;
    fechaRegistro: Date;
    estado: number;

    estadoProceso: String;

    idUsuarioRegistro: number;
    idUsuarioModificacion: number;
    fechaModificacion: Date;
    cantidad: number;
  
    idDetalleInventario: DetalleInventario = new DetalleInventario();
}

