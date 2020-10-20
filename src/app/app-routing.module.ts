import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeComponent} from './personaje/personaje.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
const routes: Routes = [

  {
    path:'personaje',
    component: PersonajeComponent
  },
  {
    path:'pelicula',
    component: PeliculaComponent
  },
  {
    path: '**',
  component: PersonajesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
