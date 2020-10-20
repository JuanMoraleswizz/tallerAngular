import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PersonajesService } from '../personajes/personajes.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    PersonajesService
  ]
})
export class PeliculaModule { }
