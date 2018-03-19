/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
import { Categoria } from '../models/categoria';

import { Modelo ,TipoProducto,Marca} from '../models/models';

export class Producto {
  

  
    id:number ;
    categoria:Categoria= new Categoria();
    idModelo:Modelo = new Modelo();
    idMarca: Marca= new Marca();
    tipoProducto:TipoProducto;
    codigoFabricante:String;
    codigoAnterior:String;
    codigoAncestro:String;
    codigoInterno:String;
    codigoBarras:String;
    equipo:String;
    versionFirmware:String;
    campo1:String;
    campo2:String;
    estado:number;
    descripcionVenta:String;
 
    
    
    



}

