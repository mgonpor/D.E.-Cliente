import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('boletin1');

  public playas: string[] = ["Chipiona", "Matalascañas", "La Caleta", "Mazagon", "Bolonia"];

  // Ejer 1
  public recorrerPlayas(): void {
    for (let i = 0; i < this.playas.length; i++) {
      console.log("Playa " + i + ": " + this.playas[i]);
    }
  }

//   Ejer 2
  public pintarNotas(): void {

  }

}
