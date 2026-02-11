import { Component } from '@angular/core';
import { Tablero } from '../../models/tablero';
import { TableroService } from '../../services/tablero-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ColumnaService } from '../../services/columna-service';

@Component({
  selector: 'app-board-new',
  imports: [FormsModule],
  templateUrl: './board-new.html',
  styleUrl: './board-new.css',
})
export class BoardNew {

  public tableroNuevo: Tablero = new Tablero(0, '', '');

  constructor(private tableroService: TableroService, private columnaService: ColumnaService, private router: Router) { }

  public crearTablero() {
    this.tableroNuevo.id = this.tableroService.autoIncrementId();
    this.tableroService.save(this.tableroNuevo);
    this.columnaService.crearColumnas(this.tableroNuevo);
    this.router.navigate(['/tablero']);
  }

}
