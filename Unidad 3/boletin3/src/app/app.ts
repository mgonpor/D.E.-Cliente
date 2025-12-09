import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Alumno} from './models/alumno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('boletin3');
  public datos: number[] = [1, 7, 8, 3, 4, 9];
  public nombres: string[] = ["Antonio", "Javier", "Ana", "Pepe", "alvaro"];
  public precios: number[] = [12.50, 7.99, 4.98, 19.75];

  public alumnos: Alumno[] = [
    new Alumno("Antonio", "Perez Garcia", new Date("2001-10-20"), [7, 8, 5]),
    new Alumno("Juan", "Gonzalez Portillo", new Date("1998-02-28"), [4, 5, 10]),
    new Alumno("Ana", "Lopez Lopez", new Date("1999-08-01"), [9, 8, 8])
  ];

  ngOnInit(): void {
    console.log("datos: " + this.datos);
  }

  // Act 1
  public ejer1(): void {
    console.table(this.datos.map(n => n*2));
  }

  // Act 2
  public ejer2(): void {
    console.table(this.datos.filter(n => n >= 5));
  }

  // Act 3
  public ejer3(flag: boolean): void {
    if(flag){ // Asc
      console.table(this.datos.sort((a, b) => a - b));
    }else{    // Desc
      console.table(this.datos.sort((a, b) => b - a));
    }
  }

  // Act 4
  public ejer4(): void {
    console.table(this.nombres
      .filter(s => s.substring(0,1).toUpperCase() == "A")
      .map(s => s.toUpperCase()));
  }

  // Act 5
  public ejer5(): void {
    console.log(
      (this.datos.reduce((acum, n) => acum + n) / this.datos.length)
      .toFixed(2));
  }

  // Act 6
  public ejer6(porcentaje: number): void {
    console.table("Originales: " + this.precios);
    console.table(this.precios.map(n => n * (1 - porcentaje) ));
  }

  // Act 7
  public ejer7a(): void {

  }

  public ejer7b(): void {
    console.log("Media de todos: " + (this.alumnos
      .map(a => a.media)
      .reduce((a, n) => a + n)
    / this.alumnos.length).toFixed(2));
  }

  public ejer7c(): void {

  }
}
