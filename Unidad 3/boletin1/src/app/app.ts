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
      if (v == 1){
        index = i;
        break;
      }
    }
    this.frutas.splice(index, 0, fruta);
  }
}
