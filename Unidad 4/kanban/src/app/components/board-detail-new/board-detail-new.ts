import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Columna } from '../../models/columna';
import { ColumnaService } from '../../services/columna-service';
import { ActivatedRoute, Router } from '@angular/router';
import { TableroService } from '../../services/tablero-service';

@Component({
  selector: 'app-board-detail-new',
  imports: [FormsModule],
  templateUrl: './board-detail-new.html',
  styleUrl: './board-detail-new.css',
})
export class BoardDetailNew implements OnInit {

  public nuevaColumna!: Columna;

  constructor(private columnaService: ColumnaService, private tableroService: TableroService,
    private router: Router, private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const idTablero = Number(this.actRouter.snapshot.params['id']);
    const tablero = this.tableroService.findById(idTablero);
    if (tablero) {
      this.nuevaColumna = new Columna(0, '', '', tablero);
    }
  }

  public crearColumna() {
    this.nuevaColumna.id = this.columnaService.autoIncrement();
    this.columnaService.save(this.nuevaColumna);
    this.router.navigate(['/tablero', this.nuevaColumna.tablero.id]);
  }

}
