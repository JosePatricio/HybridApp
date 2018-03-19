/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */

export class Cliente {
  
  id: number;
  cliente: string;
  ruc: string;
  direccion: string;
  telefono: string;
  telefono2: string;
  email: string;
  estado: boolean;
  contacto: string;
  prioridad: number;
  ciudad: string;

}

