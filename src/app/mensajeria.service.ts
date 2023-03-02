import { Injectable } from '@angular/core';
import { Mensaje, tipo } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  constructor() { }

  mensaje!: Mensaje;

  add(titulo: string, descripcion:string, tipo:tipo) {
    this.mensaje={
      titulo:titulo,
      descripcion:descripcion,
      tipo:tipo
    }
  }

  clear() {
    this.mensaje ={
      titulo:'',
      descripcion:'',
      tipo:tipo.info
    };
  }
}
