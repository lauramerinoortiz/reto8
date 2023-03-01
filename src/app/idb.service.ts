import { Injectable } from '@angular/core';
import { Pelicula } from './peliculas';

@Injectable({
  providedIn: 'root'
})
export class IDBService {
  private baseDatos!:IDBDatabase;
  constructor() { }
 
  conexionBD():void{
		window.indexedDB
		if(window.indexedDB){
		
			const respuesta=indexedDB.open("Peliculas",1);
		
			respuesta.onsuccess=()=>{
				
				this.baseDatos=respuesta.result	
				//this.obtenerRegistro()
			}
		
			respuesta.onupgradeneeded=()=>{
				
				this.baseDatos=respuesta.result
				this.baseDatos.createObjectStore('peliculas',{keyPath:'id'})
				
			}
		}	
	}
  insertar(pelicula:Pelicula){
	
			let obj = pelicula
			const almacenar=this.baseDatos.transaction('peliculas','readwrite').objectStore('peliculas').add(obj);
			almacenar.onsuccess=()=>{
				console.log("Ha almacenado")
			}
		}
}

