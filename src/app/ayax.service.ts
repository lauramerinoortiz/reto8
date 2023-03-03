import { Injectable } from '@angular/core';
import { Actor } from './actor';
import { ACTORES } from './mock-actores';
import { PELICULAS } from './mock-pelis';
import { Pelicula } from './peliculas';
import { PeliculasComponent } from './peliculas/peliculas.component';
@Injectable({
  providedIn: 'root'
})
export class AyaxService {

  constructor() { 
   
  }

  mostrar(hola:String): Pelicula[] {
    PELICULAS.length=0
    let xhr= new XMLHttpRequest()
    xhr.open('GET', 'https://imdb-api.com/en/API/SearchMovie/k_79z6tz4w/'+hola, true)
    xhr.onload=function (){
    if(xhr.status==200){
      let resp= JSON.parse(this.response)
        let datos=resp.results
        for(let peli of datos){
            //console.log(peli)
            let dato:Pelicula =
                {
                    id:peli.id,
                    imagen:peli.image,
                    titulo:peli.title,
                    descripcion:peli.description
                }
            PELICULAS.push(dato)
        }
    }
    }
    xhr.send()
    const pelis = PELICULAS
    return pelis
  }

  /**
	 * Método que dada una pelicula busca sus actores y lo devuelve
	 * @param pelicula 
	 */
	verActores(pelicula:Pelicula):any{
    ACTORES.length=0
		let xhr= new XMLHttpRequest()
		xhr.open('GET', 'https://imdb-api.com/en/API/FullCast/k_79z6tz4w/'+pelicula.id, true)
		xhr.onload=function (){
			if(xhr.status==200){
			let resp= JSON.parse(this.response)
				let datos=resp.actors
				for(let actor of datos){
          //console.log(actor)
          let dato:Actor =
              {
                  nombre:actor.name
              }
          ACTORES.push(dato)
      }
			}
		}
		xhr.send()
    const actores = ACTORES
    console.log(actores)
    return actores
	}
  
}
