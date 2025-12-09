export class Alumno {

  constructor(
    private _nombre: string,
    private _apellidos: string,
    private _fechaNac: Date,
    private _notas: number[]
  ) {};

  get nombre(): string { return this._nombre; };
  get apellidos(): string { return this._apellidos; };
  get fechaNac(): Date { return this._fechaNac; };
  get notas(): number[] { return this._notas; };

  set nombre(nombre: string) { this._nombre = nombre; };
  set apellidos(apellidos: string) { this._apellidos = apellidos; };
  set fechaNac(fechaNac: Date) { this._fechaNac = fechaNac; }
  set notas(notas: number[]) { this._notas = notas; };

  get media(): number {
    return this._notas.reduce((acum, n) => acum + n) / this._notas.length;
  }

}
