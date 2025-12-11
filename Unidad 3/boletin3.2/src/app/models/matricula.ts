import {Asignatura} from './asignatura';

export class Matricula {

  constructor(
    private _nota1: number,
    private _nota2: number,
    private _nota3: number,
    private _fechaMat: Date,
    private _asignatura: Asignatura
  ) {}


  get nota1(): number {
    return this._nota1;
  }
  get nota2(): number {
    return this._nota2;
  }
  get nota3(): number {
    return this._nota3;
  }
  get fechaMat(): Date {
    return this._fechaMat;
  }
  get asignatura(): Asignatura {
    return this._asignatura;
  }

  set nota1(nota1: number) {
    this._nota1 = nota1;
  }
  set nota2(nota2: number) {
    this._nota2 = nota2;
  }
  set nota3(nota3: number) {
    this._nota3 = nota3;
  }
  set fechaMat(fechaMat: Date) {
    this._fechaMat = fechaMat;
  }
  set asignatura(asignatura: Asignatura) {
    this._asignatura = asignatura;
  }

  public mediaNotas(): number {
    return (this.nota1 + this.nota2 + this.nota3)/3;
  }

}
