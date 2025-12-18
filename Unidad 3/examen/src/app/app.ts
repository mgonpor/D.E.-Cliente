import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Alumno} from './models/alumno';
import {Convenio} from './models/convenio';
import {Empresa} from './models/empresa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examen');

  public alumno1: Alumno = new Alumno("Juan", "Pérez Alcaide", new Date("2005/01/01"), "juanpa@email.com", 8.2);

  public convenio1: Convenio = new Convenio(new Date("2025/02/16"), new Date("2025/06/01"), [this.alumno1], 2);

  public empresa: Empresa = new Empresa("Los Alcores INC", 50, [this.convenio1]);

}
