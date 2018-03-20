/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
import { Producto } from '../models/producto';
import { DetalleCatalogoReporte } from '../models/detalleCatalogoReporte';
export class ProductoRepuestoReporte {

  id: number;
  idDetalleCatalogoReporte: DetalleCatalogoReporte = new DetalleCatalogoReporte();
  idProducto: Producto = new Producto();
  estado: boolean;

  cambiado: boolean = false;
  solicitar: boolean = false;
  porcentaje: number;

  auxFound: boolean = false;
}

