import {Alumno} from './alumno';

export class Convenio {

  constructor(
    private _fecha_inicio: Date,
    private _fecha_fin: Date,
    private _alumnos: Alumno[],
    private _num_horas: number
  ){};


  get fecha_inicio(): Date {
    return this._fecha_inicio;
  }

  set fecha_inicio(value: Date) {
    this._fecha_inicio = value;
  }

  get fecha_fin(): Date {
    return this._fecha_fin;
  }

  set fecha_fin(value: Date) {
    this._fecha_fin = value;
  }

  get alumnos(): Alumno[] {
    return this._alumnos;
  }

  set alumnos(value: Alumno[]) {
    this._alumnos = value;
  }

  get num_horas(): number {
    return this._num_horas;
  }

  set num_horas(value: number) {
    this._num_horas = value;
  }

  public num_sesiones(): number {
    let num: number = 0;
    let f: Date = this._fecha_inicio;
    do{
      if(!this.es_finde(f)){
        num++;
      }
      let n = f.getTime() + 86400000;
      f.setTime(n); // Milisegundos en un día
    }while (f < this.fecha_fin);
    return num;
  }

// AUX
  private es_finde(fecha: Date): boolean {
    const dia: number = fecha.getDay();
    return dia === 0 || dia === 6;
  }


}
