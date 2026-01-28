import { Injectable } from '@angular/core';
import { Tablero } from '../models/tablero';

@Injectable({
  providedIn: 'root',
})
export class TableroService {

  private tableros: Tablero[] = this.initData();

  constructor() { }

  private initData(): Tablero[] {

    this.tableros = [];

    const tablero1 = new Tablero(1, "Proyecto Alpha", "#15ccc3");
    const tablero2 = new Tablero(2, "Proyecto Beta", "#2458df");
    const tablero3 = new Tablero(3, "Proyecto Gamma", "#3a1fde");
    const tablero4 = new Tablero(4, "Proyecto Delta", "#adb24e");
    const tablero5 = new Tablero(5, "Proyecto Epsilon", "#f35f23");
    const tablero6 = new Tablero(6, "Proyecto Zeta", "#a4e243");

    this.tableros.push(tablero1, tablero2, tablero3, tablero4, tablero5, tablero6);

    return this.tableros;
  }

  public findAll(): Tablero[] {
    return this.tableros;
  }

  public findById(id: number): Tablero {
    return this.tableros.filter(tablero => tablero.id === id)[0];
  }

  public autoIncrementId(): number {
    return this.tableros.length + 1;
  }

  public save(tablero: Tablero): void {
    this.tableros.push(tablero);
  }

}
