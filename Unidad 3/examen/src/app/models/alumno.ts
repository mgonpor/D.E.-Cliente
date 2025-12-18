export class Alumno {

  constructor(
    private _nombre: string,
    private _apellidos: string,
    private _fecha_nacimiento: Date,
    private _email: string,
    private _nota_final: number
  ){};


  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get apellidos(): string {
    return this._apellidos;
  }

  set apellidos(apellidos: string) {
    this._apellidos = apellidos;
  }

  get fecha_nacimiento(): Date {
    return this._fecha_nacimiento;
  }

  set fecha_nacimiento(fecha_nacimiento: Date) {
    this._fecha_nacimiento = fecha_nacimiento;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get nota_final(): number {
    return this._nota_final;
  }

  set nota_final(nota_final: number) {
    this._nota_final = nota_final;
  }

  public obtener_alias(): string {
    let n: string | undefined = this.nombre.at(0);
    let a: string = this.apellidos.split(" ")
      .map(palabra => palabra.at(0))
      .join("");
    return (n + a).toUpperCase();
  }

}
