import { Component } from '@angular/core';
import { Columna } from '../../models/columna';
import { ColumnaService } from '../../services/columna-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-detail-new',
  imports: [],
  templateUrl: './board-detail-new.html',
  styleUrl: './board-detail-new.css',
})
export class BoardDetailNew {

  // todo: recibir el tablero
  private nuevaColumna: Columna = new Columna(0, '', '', null);

  constructor(private columnaService: ColumnaService, private router: Router) { }

  public crearColumna() {
    this.nuevaColumna.id = this.columnaService.autoIncrement();
    this.columnaService.save(this.nuevaColumna);
    this.router.navigate(['/tablero/:id']);
  }

}
