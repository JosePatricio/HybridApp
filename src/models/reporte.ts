/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */


import { AsignacionReparaciones } from '../models/asignacionReparaciones';
import { TipoVisitas } from '../models/TipoVisitas';
import { Usuario } from '../models/usuario';

export class Reporte {


  id: number;
  idAsignacion: AsignacionReparaciones = new AsignacionReparaciones();
  idVisita: TipoVisitas = new TipoVisitas();
  idUsuario: Usuario = new Usuario();
  numerofactura: Number;
  factura: String;
  sintomasEquipo: String;
  observacionMantenimiento: String;
  fecha: Date;
  observacionesRecomendaciones: String;
  horaInicio: Date;
  horaFin: Date;
  nombreCliente: String;
  firmaCliente: String;
  firmaClienteBase64: String;
  tipo: String;
  subtipo: String;
  estado: String;
  usuarioCreacion: String;
  usuarioModificacion: String;
  fechaCreacion: Date;
  fechaModificacion: Date;
  referencia: String;
  notas: String;
  numeroReporteTecnico: String;




}

