import { CabeceraCatalogoReporte } from "./cabeceraCatalogoReporte";

/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */

export class DetalleCatalogoReporte {



  id: number;
  descripcion: string;
  estado: boolean;
  catalogo: boolean;
  orden: number;
  tipoRepuesto: string;

  codigoRepuesto: string;
  seleccion: boolean = false;
  idProductoRepuestoReporte: number;
  cambiado: boolean;
  solicitar: boolean;
  porcentaje: number;

  idCabecera: CabeceraCatalogoReporte = new CabeceraCatalogoReporte();
  idReporteMantenimiento: number;
}

