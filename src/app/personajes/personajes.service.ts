import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constantes } from '../endpoint';
import { Personaje } from '../models/personaje.model';
import { RequestResult } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private _httpClient: HttpClient) { }

  public obtenerPersonajes(): Observable<RequestResult> {
    return this._httpClient.get<RequestResult>(Constantes.endpoint+ 'people/');
  }

  public obtenerPersonajesPage(page){
    return this._httpClient.get<RequestResult>(page);
  }

  public obtenerPersonaje(endPoint:string): Observable<Personaje>{
    return this._httpClient.get<Personaje>(endPoint);
  }
}
