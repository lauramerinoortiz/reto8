import { Component } from '@angular/core';
import { MensajeriaService } from '../mensajeria.service';
//import { tipo } from '../mensaje';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})

export class MensajesComponent {
 
  constructor(public mensajeService: MensajeriaService){

  }
}
