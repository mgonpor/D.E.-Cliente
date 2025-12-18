import {Convenio} from './convenio';

export class Empresa {

  constructor(
    private _nombre: string,
    private _num_empleados: number,
    private _convenios: Convenio[]
  ){};


  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get num_empleados(): number {
    return this._num_empleados;
  }

  set num_empleados(value: number) {
    this._num_empleados = value;
  }

  get convenios(): Convenio[] {
    return this._convenios;
  }

  set convenios(value: Convenio[]) {
    this._convenios = value;
  }

  public listado_alumnos(): string[]{
    let array: string[] = this.convenios.map(conv => conv.alumnos
      .map(alumno => alumno.nombre)
      .join());
    let set: Set<string> = new Set(array);
    return Array.from(set);
  }

  public nota_media_alumnos(): number {
    let array_notas: number[] = this.convenios.map(conv => conv.alumnos
      .flatMap(alumno => alumno.nota_final)).flat();
    let total_suma: number = 0;
    for (const n of array_notas) {
      total_suma += n;
    }
    return Number((total_suma/array_notas.length).toFixed(0));
  }

  public total_horas(): number {
    let array_horas: number[] = this.convenios.filter((c) => c.fecha_fin > c.fecha_inicio)
      .map(c => c.num_horas);
    let total_horas: number = 0;
    for (const n of array_horas) {
      total_horas += n;
    }
    return total_horas;
  }


}
