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
    new Alumno("Antonio", "Perez Garcia", new Date("2001-10-20"), 7, 10, 5),
    new Alumno("Juan", "Gonzalez Portillo", new Date("1998-02-28"), 4, 5, 8),
    new Alumno("Ana", "Lopez Lopez", new Date("1999-08-01"), 9, 8, 8)
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
    const todasLasNotas: number[] = this.alumnos.flatMap(a => [a.nota1, a.nota2, a.nota3]);

    let recuentoNotas: Map<number, number> = new Map();
    let valorMaximo: number = 0;
    let claveMaxima: number = 0;

    for (let n of todasLasNotas) {
      recuentoNotas.set(n, (recuentoNotas.get(n) || 0) + 1);
    }
    for (let [k, v] of recuentoNotas){
      if(v > valorMaximo){
        valorMaximo = v;
        claveMaxima = k;
      }
    }

    console.log("La moda es " + claveMaxima);
  }

  public ejer7b(): void {
    const todasLasNotas: number[] = this.alumnos.flatMap(a => [a.nota1, a.nota2, a.nota3]);
    console.log("Media: " + (todasLasNotas.reduce((a, n) => a + n)/todasLasNotas.length).toFixed(2));
  }

  public ejer7c(): void {
    const todasLasNotas: number[] = this.alumnos.flatMap(a => [a.nota1, a.nota2, a.nota3]).filter(a => a >= 5);
    console.log("Media notas aprobadas: " + (todasLasNotas.reduce((a, n) => a + n) / todasLasNotas.length).toFixed(2));
  }

  public ejer7d(): void {
    const anioMax: number = 2000;
    const todasLasNotas: number[] = this.alumnos.filter(a => a.fechaNac.getUTCFullYear() < anioMax).flatMap(a => [a.nota1, a.nota2, a.nota3]);
    console.log("Nota más alta anterior al 2000: " + todasLasNotas.sort((a, b) => b - a)[0]);
  }
}
