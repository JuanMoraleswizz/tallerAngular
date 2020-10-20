import { Injectable } from '@angular/core';
import { Pelicula } from '../models/peliculas.model';
import { Personaje } from '../models/personaje.model';
import { PeliculaComponent } from '../pelicula/pelicula.component';

@Injectable({
  providedIn: 'root'
})
export class EmiterDatosService {

  public personaje: Personaje;
  public pelicula: Pelicula;
  constructor() { }
}
