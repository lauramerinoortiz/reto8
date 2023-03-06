import { Component, Input } from '@angular/core';
import { Actor } from '../actor';
import { IDBService } from '../idb.service';
import { Pelicula } from '../peliculas';
import { PeliculasComponent } from '../peliculas/peliculas.component';

@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.component.html',
  styleUrls: ['./reparto.component.css']
})

export class RepartoComponent {
   @Input() actores!:Actor[];

  //  mostrarReparto(actor:Actor[]):void{
  //      this.actores=actor
  // }
}
