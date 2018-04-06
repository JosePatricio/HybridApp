import { Usuario, ClienteSucursal, TipoVisitas, Producto } from "./models";

export class AsignacionReparaciones {
    id: number;

    fechaInicioAtencion: Date;

    horaInicioAtencion: Date;

    fechaFinAtencion: Date;

    horaFinAtencion: Date;

    fechaRegistro: Date;

    idUsuarioRegistro: number;
    nombreUsuarioRegistro: string;

    prioridad: number;

    observacion: string;

    tipoReporte: string;
    tipoNotificacion: string;

    tipoEquipo: string;
    estado: string;


    idReporte: number;

    codigo: string;

    contactoRequerimiento: string;

    telefonoRequerimiento: string;

    preasignacion: boolean;

    idUsuarioAtencion: Usuario = new Usuario;

    idClienteSucursal: ClienteSucursal = new ClienteSucursal();

    idTipoVisita: TipoVisitas = new TipoVisitas();

    producto: Producto = new Producto();

    serial: string;



}

