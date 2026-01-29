import { Component, Input, OnInit } from '@angular/core';
import { Columna } from '../../models/columna';
import { ActivatedRoute } from '@angular/router';
import { ColumnaService } from '../../services/columna-service';
import { TareaService } from '../../services/tarea-service';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task implements OnInit {

  @Input() public columna!: Columna;
  public tareas: Tarea[] = [];

  @Input() public trigger!: number;

  constructor(
    private columnaService: ColumnaService,
    private route: ActivatedRoute,
    private tareaService: TareaService
  ) { }

  ngOnInit(): void {
    if (!this.columna) {
      this.columna = this.columnaService.findByTableroIdAndColumnaId(
        Number(this.route.snapshot.paramMap.get('tableroId')),
        Number(this.route.snapshot.paramMap.get('columnaId'))
      );
    }

    if (this.columna) {
      this.tareas = this.tareaService.findByColumnaId(this.columna.id);
    }
  }

  ngOnChanges(): void {
    this.tareas = this.tareaService.findByColumnaId(this.columna.id);
  }

  dragStart(tarea: Tarea) {
    this.tareaService.drag(tarea);
  }

  dragEnd() {
    this.tareaService.drop();
  }

}
