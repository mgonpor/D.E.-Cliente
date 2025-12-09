import {Alumno} from './alumno';
import {Asignatura} from './asignatura';

export class Matricula {

  constructor(
    private alumno: Alumno,
    private asignatura: Asignatura,

  ) {};

}
