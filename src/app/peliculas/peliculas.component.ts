import { Component } from '@angular/core';
import { PELICULAS } from '../mock-pelis';
import { Pelicula } from '../peliculas';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  peliculas: Pelicula[] =[];
  mostrarPeliculas(){
    this.peliculas=PELICULAS;
    console.log(this.peliculas)
  }
}
