import { Component } from '@angular/core';
import { Actor } from '../actor';
import { IDBService } from '../idb.service';
import { Pelicula } from '../peliculas';

@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.component.html',
  styleUrls: ['./reparto.component.css']
})

export class RepartoComponent {
  public actores:Actor[]=[];

  //  mostrarReparto(actor:Actor[]):void{
  //      this.actores=actor
  // }
}
