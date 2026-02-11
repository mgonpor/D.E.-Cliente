import { Component, OnInit } from '@angular/core';
import { Columna } from '../../models/columna';
import { Tablero } from '../../models/tablero';
import { TableroService } from '../../services/tablero-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ColumnaService } from '../../services/columna-service';
import { Task } from "../task/task";
import { TareaService } from '../../services/tarea-service';

@Component({
  selector: 'app-board-detail',
  imports: [Task, RouterLink],
  templateUrl: './board-detail.html',
  styleUrl: './board-detail.css',
})
export class BoardDetail implements OnInit {

  public tablero?: Tablero;
  public columnas: Columna[] = [];

  public trigger: number = 0;

  constructor(
    private tableroService: TableroService,
    private columnaService: ColumnaService,
    private route: ActivatedRoute,
    private tareaService: TareaService
  ) { }

  ngOnInit(): void {
    this.tablero = this.tableroService.findById(
      Number(this.route.snapshot.paramMap.get('id'))
    );
    this.columnas = this.columnaService.findByTableroId(
      this.tablero?.id
    );
  }

  dragOver(event: DragEvent) {
    event.preventDefault();
  }

  drop(columna: Columna) {
    this.tareaService.ponerTarea(columna);
    this.trigger++;
  }

}
