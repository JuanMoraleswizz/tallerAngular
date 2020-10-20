import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonajesService } from './personajes.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator'
import {MatTableDataSource} from '@angular/material/table';
import { Personaje } from '../models/personaje.model';
import { from, Subscription } from 'rxjs';
import {RequestResult} from '../models/request.model'
import { Router } from '@angular/router';
import { EmiterDatosService } from '../datos/emiter-datos.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  public listaPersonajes: Personaje[]= [];
  public requestR: RequestResult;
  public pageEvent: PageEvent;
  public page = 1;
  public dataSource = new MatTableDataSource<Personaje>(this.listaPersonajes);
  public displayedColumns: string[] = ['name', 'gender'];
  constructor(private _personajesService: PersonajesService, private _router: Router,
    private _emiterPersonaje: EmiterDatosService ) { }
  @ViewChild(MatPaginator, { static: true }) paginador: MatPaginator;
  ngAngAfterViewInit() : void {
  }
  cargarDatos(){
    this.subscription = this._personajesService.obtenerPersonajes().subscribe( response => {
      console.log(response)
       this.requestR = response;
       console.log(this.requestR.results)
       this.listaPersonajes = this.requestR.results;
      this.dataSource = new MatTableDataSource<Personaje>(this.listaPersonajes);
      this.dataSource.paginator = this.paginador;
    })
  }
  cargarPersonaje(url:string, personaje:Personaje){
    console.log(url)
    this._emiterPersonaje.personaje = personaje;
   // this._router.navigate(['personaje'])
   console.log( this._emiterPersonaje.personaje)
   this._router.navigate(['/personaje'])
  }
  next(){
    console.log('entro en next')
    console.log(this.requestR.next)
   if(this.requestR.next !==null){
    this._personajesService.obtenerPersonajesPage(this.requestR.next).subscribe(response =>{
      console.log(response);
      this.requestR = response;
      console.log(this.requestR.results)
      this.listaPersonajes = this.requestR.results;
     this.dataSource = new MatTableDataSource<Personaje>(this.listaPersonajes);
     this.dataSource.paginator = this.paginador;

    })
  }else{
    alert('llego a la ultima pagina')
  }
  }

  prev(){
    if(this.page ==1){
      alert("Ya estas en la primera pagina");
    }
  }
  ngOnInit( ): void {
     this.cargarDatos();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
