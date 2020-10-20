import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmiterDatosService } from '../datos/emiter-datos.service';
import { Pelicula } from '../models/peliculas.model';
import { Personaje } from '../models/personaje.model';
import { PeliculaService } from '../pelicula/pelicula.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonajeComponent implements OnInit {

  public personajeForm: FormGroup;
  public peliculas: Pelicula[] = [];
  constructor(private _formBuilder: FormBuilder, public emiter: EmiterDatosService, private peliculaService: PeliculaService,
    private _router: Router) { }

  ngOnInit(): void {
    this.parsearPeliculas();
  }

  verDatos(pelicula: Pelicula) {
    this.emiter.pelicula = pelicula;
   this._router.navigate(['/pelicula']);
  }
  parsearPeliculas() {
    for (let pelicula of this.emiter.personaje.films) {
      this.peliculaService.obtenerPelicula(pelicula).subscribe(response => {
        this.peliculas.push(response);
      })
    }
  }

}
