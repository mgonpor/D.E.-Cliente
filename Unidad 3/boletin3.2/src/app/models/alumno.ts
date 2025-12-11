import {Matricula} from './matricula';
import {Asignatura} from './asignatura';

export class Alumno {

  constructor(
    private _id: number,
    private _nombre: string,
    private _apellidos: string,
    private _fechaNac: Date,
    private _matriculas: Matricula[]
  ) {}

  get id(): number { return this._id; }
  get nombre(): string { return this._nombre; }
  get apellidos(): string { return this._apellidos; }
  get fechaNac(): Date { return this._fechaNac; }
  get matriculas(): Matricula[] { return this._matriculas; }

  set id(id: number) { this._id = id; }
  set nombre(nombre: string) { this._nombre = nombre; }
  set apellidos(apellidos: string) { this._apellidos = apellidos; }
  set fechaNac(fechaNac: Date) { this._fechaNac = fechaNac; }
  set matriculas(matriculas: Matricula[]) { this._matriculas = matriculas; }

  public calcularEdad(): number {
    const hoy: Date = new Date();
    let edad: number = hoy.getFullYear() - this.fechaNac.getFullYear();
    const mes: number = hoy.getMonth() + this.fechaNac.getMonth();

    return (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNac.getDate())) ? edad-1 : edad;
  }

  public asignaturasAprobadas(): Asignatura[] {
    return this.matriculas
            .filter(matricula => matricula.mediaNotas() >= 5)
            .map(matricula => matricula.asignatura);
  }

}
