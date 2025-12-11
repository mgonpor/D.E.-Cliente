export class Asignatura {

  constructor(
    private _cod: string,
    private _nombre: string,
    private _horasSem: number,
    private _numSemanas: number
  ) {}


  get cod(): string {
    return this._cod;
  }
  get nombre(): string {
    return this._nombre;
  }
  get horasSem(): number {
    return this._horasSem;
  }
  get numSemanas(): number {
    return this._numSemanas;
  }

  set cod(cod: string) {
    this._cod = cod;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  set horasSem(horasSem: number) {
    this._horasSem = horasSem;
  }
  set numSemanas(numSemanas: number) {
    this._numSemanas = numSemanas;
  }

  public horasTotales(): number {
    return this.horasSem * this.numSemanas;
  }

}
