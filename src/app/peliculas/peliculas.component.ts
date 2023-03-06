import { Component } from '@angular/core';
import { PELICULAS } from '../mock-pelis';
import { Pelicula } from '../peliculas';
import { AyaxService } from '../ayax.service';
import { IDBService } from '../idb.service';
import { RepartoComponent } from '../reparto/reparto.component';
import { Actor } from '../actor';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
 pelicula: String = "";
 peliculas: Pelicula[] =[];
 reparto: RepartoComponent = new RepartoComponent; 
 actores!:Actor[]
  constructor(private ayax: AyaxService, public idb: IDBService){
    
  };
  
  anadirFavoritos(pelicula:Pelicula):void{
    this.idb.insertar(pelicula);
  }
  
  mostrarPeliculas():void{
    this.peliculas = this.ayax.mostrar(this.pelicula);
    /*this.peliculas=PELICULAS;
    console.log(this.peliculas)*/
  }

  mostrarReparto(pelicula:Pelicula):void{
    this.actores=this.ayax.verActores(pelicula)
    console.log(this.actores)
  }

  ngOnInit(): void {
    this.mostrarPeliculas()
  }
  
}
