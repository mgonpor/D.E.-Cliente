import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { ColumnaService } from './columna-service';
import { Columna } from '../models/columna';

@Injectable({
  providedIn: 'root',
})
export class TareaService {

  private tareas: Tarea[] = [];

  public draggedTask?: Tarea;

  constructor(
    private columnaService: ColumnaService
  ) { this.initData(); }

  private initData(): void {

    const todo1: Columna = this.columnaService.findByTableroIdAndColumnaId(1, 1);
    const todo2: Columna = this.columnaService.findByTableroIdAndColumnaId(2, 4);

    console.log(todo1);
    console.log(todo2);

    // Solo se crean tareas para los tableros 1 y 2
    this.tareas = [
      new Tarea(1, "Tarea 1", "Descripcion 1", new Date(), todo1),
      new Tarea(2, "Tarea 2", "Descripcion 2", new Date(), todo1),
      new Tarea(3, "Tarea 3", "Descripcion 3", new Date(), todo1),
      new Tarea(4, "Tarea 4", "Descripcion 4", new Date(), todo2),
      new Tarea(5, "Tarea 5", "Descripcion 5", new Date(), todo2)
    ];
  }

  public findByColumnaId(columnaId: number): Tarea[] {
    const t: Tarea[] = this.tareas.filter(tarea => tarea.columna.id === columnaId);
    console.log(t);
    return t;
  }

  public drag(tarea: Tarea) {
    this.draggedTask = tarea;
  }

  public drop() {
    this.draggedTask = undefined;
  }

  public ponerTarea(columna: Columna) {
    if (this.draggedTask) {
      this.tareas = this.tareas.filter(tarea => tarea != this.draggedTask);
      this.draggedTask.columna = columna;
      this.tareas.push(this.draggedTask);
    }
  }

}
