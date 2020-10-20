import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { EmiterDatosService } from '../datos/emiter-datos.service';
import { Personaje } from '../models/personaje.model';
import { PersonajesService } from '../personajes/personajes.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PeliculaComponent implements OnInit {

  public personajes: Personaje[] = [];

  constructor(public emiter:EmiterDatosService,
     private personajeService: PersonajesService,
     private router: Router) { }


  ngOnInit(): void {
    this.parsearPersonajes();
  }

  parsearPersonajes(){
    for(let personaje of this.emiter.pelicula.characters){
      this.personajeService.obtenerPersonaje(personaje).subscribe(response =>{
        this.personajes.push(response);
      });
    }
  }

  cargarPersonaje(element){
    this.emiter.personaje = element;
    this.router.navigate(['personaje']);
  }
}
