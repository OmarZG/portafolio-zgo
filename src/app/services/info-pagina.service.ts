import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargaInfo();
    this.cargarEquipo();

  }

  private cargaInfo() {

    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
             .subscribe( (resp: InfoPagina) =>  {
    this.cargada = true;
    this.info = resp;

    });

  }

  private cargarEquipo() {
    // Leer archivo JSON
    this.http.get('https://angula-base.firebaseio.com/equipo.json').subscribe( ( resp: any[] ) =>  {

      this.equipo = resp;

      });
  }

}
