import { Injectable } from '@angular/core';
import { TableroService } from './tablero-service';
import { Columna } from '../models/columna';

@Injectable({
  providedIn: 'root',
})
export class ColumnaService {

  private columnas: Columna[] = this.initData();

  constructor(private _tableroService: TableroService) { }

  private initData(): Columna[] {

    this.columnas = [];

    const columna1 = new Columna(1, "En Progreso", "#23624f", this._tableroService.findById(1));
    const columna2 = new Columna(2, "En Espera", "#f23411", this._tableroService.findById(1));
    const columna3 = new Columna(3, "Completado", "#15f24f", this._tableroService.findById(1));

    this.columnas.push(columna1, columna2, columna3);

    return this.columnas;
  }

}
