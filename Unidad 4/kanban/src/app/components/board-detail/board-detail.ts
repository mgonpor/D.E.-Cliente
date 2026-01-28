import { Component, OnInit } from '@angular/core';
import { Columna } from '../../models/columna';
import { Tablero } from '../../models/tablero';
import { TableroService } from '../../services/tablero-service';
import { ActivatedRoute } from '@angular/router';
import { ColumnaService } from '../../services/columna-service';

@Component({
  selector: 'app-board-detail',
  imports: [],
  templateUrl: './board-detail.html',
  styleUrl: './board-detail.css',
})
export class BoardDetail implements OnInit {

  public tablero?: Tablero;
  public columnas: Columna[] = [];

  constructor(
    private tableroService: TableroService,
    private columnaService: ColumnaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tablero = this.tableroService.findById(
      Number(this.route.snapshot.paramMap.get('id'))
    );
    this.columnas = this.columnaService.findByTableroId(
      this.tablero!.id
    );
  }

}
