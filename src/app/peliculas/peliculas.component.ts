import { Component } from '@angular/core';
import { PELICULAS } from '../mock-pelis';
import { Pelicula } from '../peliculas';
import { AyaxService } from '../ayax.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
 pelicula: String = "";
  constructor(private ayax: AyaxService){
    
  };
  

  peliculas: Pelicula[] =[];

  
  
  mostrarPeliculas(){
    console.log(this.pelicula)
    this.peliculas = this.ayax.mostrar(this.pelicula);
   
    /*this.peliculas=PELICULAS;
    console.log(this.peliculas)*/
  }
  ngOnInit(): void {
    this.mostrarPeliculas()
  }

  
}
