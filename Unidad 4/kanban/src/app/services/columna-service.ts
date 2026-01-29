import { Injectable } from '@angular/core';
import { TableroService } from './tablero-service';
import { Columna } from '../models/columna';

@Injectable({
  providedIn: 'root',
})
export class ColumnaService {

  private columnas: Columna[];

  constructor(
    private _tableroService: TableroService) {
    this.columnas = this.initData();
  }

  private initData(): Columna[] {

    this.columnas = [];

    const tablero1 = this._tableroService.findById(1);
    const tablero2 = this._tableroService.findById(2);
    const tablero3 = this._tableroService.findById(3);

    const columna1 = new Columna(1, "En Progreso", "#23624f", tablero1);
    const columna2 = new Columna(2, "En Espera", "#f23411", tablero1);
    const columna3 = new Columna(3, "Completado", "#15f24f", tablero1);

    const columna4 = new Columna(4, "En Progreso", "#23624f", tablero2);
    const columna5 = new Columna(5, "En Espera", "#f23411", tablero2);
    const columna6 = new Columna(6, "Completado", "#15f24f", tablero2);

    const columna7 = new Columna(7, "En Progreso", "#23624f", tablero3);
    const columna8 = new Columna(8, "En Espera", "#f23411", tablero3);
    const columna9 = new Columna(9, "Completado", "#15f24f", tablero3);

    this.columnas.push(columna1, columna2, columna3, columna4, columna5, columna6, columna7, columna8, columna9);

    return this.columnas;
  }

  public findByTableroId(tableroId: number): Columna[] {
    return this.columnas.filter(columna => columna.tablero.id === tableroId);
  }

  public findByTableroIdAndColumnaId(tableroId: number, columnaId: number): Columna {
    const c: Columna = this.columnas.filter(columna => columna.tablero.id === tableroId && columna.id === columnaId)[0];
    console.log(c);
    return c;
  }

}
