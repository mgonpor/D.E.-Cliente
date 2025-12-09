export class Profesor {

  constructor(
    private _dni: string,
    private _nombre: string,
    private _apellidos: string,
    private _telefono: string,
    private _salarioBruto: number
  ) {}

  // Getters y Setters
  get dni(): string { return this._dni; };
  get nombre(): string { return this._nombre; };
  get apellidos(): string { return this._apellidos; };
  get telefono(): string { return this._telefono; };
  get salarioBruto(): number { return this._salarioBruto; };

  set dni(dni: string) { this._dni = dni; };
  set nombre(dni: string) { this._nombre = dni; };
  set apellidos(dni: string) { this._apellidos = dni; };
  set telefono(dni: string) { this._telefono = dni; };
  set salarioBruto(salarioBruto: number) { this._salarioBruto = salarioBruto; };

  public getsalarioNeto(irpf: number): number {
    return this._salarioBruto * (1 - irpf);
  }

}
