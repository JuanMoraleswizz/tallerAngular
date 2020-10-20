import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/peliculas.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private _http:HttpClient) { }

  obtenerPelicula(endpoint:string): Observable<Pelicula>{
    return this._http.get<Pelicula>(endpoint);
  }
}
