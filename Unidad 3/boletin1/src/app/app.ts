import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('boletin1');

  // Ejer 1
  public playas: string[] = ["Chipiona", "Matalascañas", "La Caleta", "Mazagon", "Bolonia"];

  public recorrerPlayas(): void {
    for (let i = 0; i < this.playas.length; i=i+2) {
      console.log("Playa " + i + ": " + this.playas[i]);
    }
  }

//   Ejer 2
  public notas: number[] = [8, 7, 6, 9, 4, 10, 3, 7, 6, 5];

  public pintarNotas(): void {
    let maximo: number = -Infinity;
    let minimo: number = Infinity;

    for (let i = 0; i < this.notas.length; i++) {
      if(this.notas[i] > maximo) {
        maximo = this.notas[i];
      }
      if(this.notas[i] < minimo) {
        minimo = this.notas[i];
      }
    }

    console.log("Máximo: " + maximo);
    console.log("Minimo: " + minimo);
  }

  // Ejer 3
  public edades: number[] = [20, 21, 25, 19, 19, 17, 47, 38, 51, 22, 18, 19];

  public pintarMediaEdad(): void {
    let suma: number = 0;
    let contador: number = 0;

    for (let i = 0; i < this.edades.length; i++) {
      if(this.edades[i] >= 18 && this.edades[i] <= 50) {
        suma += this.edades[i];
        contador++;
      }
    }

    console.log("La media de edad es: " + (suma/contador).toFixed(2));
  }

  // Ejer 4
  public colores: string[] = ["rojo", "naranja", "verde", "azul", "amarillo"];

  public eliminarColor(color: string): string[] {
    return this.colores.filter(data => data !== color);
  }

  // Ejer 5
  public frutas: string[] = ["Aguacate", "Banana", "Chirimoya", "Dátil", "Fresa",
    "Guayaba", "Kiwi", "Limón", "Naranja", "Pera", "Sandía", "Uva", "Yuca"];

  public meterFruta(fruta: string): void {
    let index = this.frutas.length;
    for (let i = 0; i < this.frutas.length; i++) {
      let v = (this.frutas[i] > fruta) ? -1 : 1;
      if (v == -1){
        index = i;
        break;
      }
    }
    this.frutas.splice(index, 0, fruta);
    console.log(this.frutas);
  }

  // Ejer 11
  public diaSemana: Set<string> = new Set<string>();
  public entreSemana: Set<string> = new Set<string>(["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]);
  public finde: Set<string> = new Set<string>(["Viernes", "Sábado", "Domingo"]);

  public rellena_semana(): void {
    this.diaSemana.add("Lunes")
      .add("Martes")
      .add("Miércoles")
      .add("Jueves")
      .add("Viernes")
      .add("Viernes")
      .add("Viernes")
      .add("Viernes")
      .add("Sábado")
      .add("Domingo")
      .add("Sábado");
  }

  public unir_conjuntos(): void {
    // el operador ... coje lo que haya en el interior del conjunto/array
    this.diaSemana = new Set([...this.entreSemana, ...this.finde]);

  }

  public alumnos: Set<string> = new Set<string>();

  public operar_conjuntos(opt: number): void {
    switch (opt){
      case 1:
        this.add_to_set();
        console.log(this.alumnos);
        break;
      case 2:
        this.delete_from_set();
        console.log(this.alumnos);
        break;
      case 3:
        console.log("Xexu: " + this.find_in_set("Xexu"));
        console.log("Juan: " + this.find_in_set("Juan"));
        break;
      case 4:
        console.log("Tamaño: " + this.count_set());
        break;
    }
  }

  private add_to_set(): void {
    this.alumnos.add("Pedro").add("Sara").add("Xexu").add("Maria").add("Juan");
  }

  private delete_from_set(): void {
    this.alumnos.delete("Xexu");
  }

  private find_in_set(alumno: string): boolean {
    return this.alumnos.has(alumno);
  }

  private count_set(): number {
    return this.alumnos.size;
  }

  // Ejer 13
  public lista: Array<any> = ["Pepe", "Maria", "Pepe", "Juan", "Maria", "Pepe"];

  public eliminaDuplicados(l: Array<any>): Array<any> {
    let s: Set<any> = new Set();
    s.add([...l]);
    let array: Array<any> = Array(...s);
    console.log(array);
    return array;
  }

}
