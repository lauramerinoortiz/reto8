export interface Mensaje {
    titulo:String;
    descripcion:String;
    tipo:tipo
}
 export enum tipo{
    info,
    exito,
    aviso,
    error
 }