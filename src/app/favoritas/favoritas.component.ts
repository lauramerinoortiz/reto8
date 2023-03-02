import { Component } from '@angular/core';
import { IDBService } from '../idb.service';
import { Mensaje, tipo } from '../mensaje';
import { MensajeriaService } from '../mensajeria.service';
import { Pelicula } from '../peliculas';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent {
  pelicula: String = "";
  peliculas: Pelicula[] =[];
   constructor(public idb: IDBService){
   this.mostrarFavoritas()
   };

   mostrarFavoritas():void{
     
     this.peliculas = this.idb.obtenerRegistro();
    
     /*this.peliculas=PELICULAS;
     console.log(this.peliculas)*/
   }
   ngOnInit(): void {
     this.mostrarFavoritas()
   }
 
   
    

}
