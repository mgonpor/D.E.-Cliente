import {Direccion} from './direccion';

export class Alumno {

  constructor(
    private _dni: string,
    private _nombre: string,
    private _apellidos: string,
    private _fechaNac: Date,
    private _direccion: Direccion
  ) {};

  // Getters y Setters
  get dni(): string { return this._dni; };
  get nombre(): string { return this._nombre; };
  get apellidos(): string { return this._apellidos; };
  get fechaNac(): Date { return this._fechaNac; };
  get direccion(): Direccion { return this._direccion; };

  set dni(dni: string) { this._dni = dni; };
  set nombre(nombre: string) { this._nombre = nombre; };
  set apellidos(apellidos: string) { this._apellidos = apellidos; };
  set fechaNac(fechaNac: Date) { this._fechaNac = fechaNac; };
  set direccion(direccion: Direccion) { this._direccion = direccion; };

}
