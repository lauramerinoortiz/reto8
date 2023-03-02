import { Injectable } from '@angular/core';
import { MensajeriaService } from './mensajeria.service';
import { Pelicula } from './peliculas';
import { tipo } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class IDBService {
  private baseDatos!:IDBDatabase;
  private favoritas:Pelicula[]=[]
  constructor(public aviso:MensajeriaService) { }
 
  conexionBD():void{
		window.indexedDB
		if(window.indexedDB){
		
			const respuesta=indexedDB.open("Peliculas",1);
		
			respuesta.onsuccess=()=>{
				this.aviso.add('Aviso','Busca la película que quieras y dale a Enviar.', tipo.info)
				this.baseDatos=respuesta.result	
				//this.obtenerRegistro()
			}
		
			respuesta.onupgradeneeded=()=>{
				
				this.baseDatos=respuesta.result
				this.baseDatos.createObjectStore('peliculas',{keyPath:'id'})
				
			}
		}	
	}
	obtenerRegistro(): Pelicula[]{
		const peticion= this.baseDatos.transaction('peliculas', 'readonly').objectStore('peliculas').getAll();
		
		peticion.onsuccess = () => {
			this.favoritas = peticion.result
			
		}
		return this.favoritas;
	}
	insertar(pelicula:Pelicula){
		let obj = pelicula

		const almacenar=this.baseDatos.transaction('peliculas','readwrite').objectStore('peliculas').add(obj);
		almacenar.onsuccess=()=>{
			console.log("Ha almacenado")
			this.aviso.add('Añadido','Se ha añadido.', tipo.exito)
		}
		almacenar.onerror=()=>{
			console.log("Repetido")
			this.aviso.add('Repetido','Ya está añadida a Favoritos.', tipo.error)
		}
	}
}

