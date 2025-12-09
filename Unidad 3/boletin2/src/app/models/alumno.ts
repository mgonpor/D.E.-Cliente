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

  get edad(): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this._fechaNac.getFullYear();
    const mes = hoy.getMonth() - this._fechaNac.getMonth();

    // Si el mes actual es anterior al mes de nacimiento, o si es el mismo mes pero el día actual es anterior al día de nacimiento, se resta 1 a la edad
    if (mes < 0 || (mes === 0 && hoy.getDate() < this._fechaNac.getDate())) {
      edad--;
    }
    return edad;
  }

  get iniciales(): string {
    let result: string = this._nombre.substring(0,1);
    let apellidos: string[] = this._apellidos.split(' ');
    apellidos.forEach(apellido => {
      result += apellido.substring(0,1);
    });
    return result.toUpperCase();
  }

}
