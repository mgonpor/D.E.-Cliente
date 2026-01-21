export class Usuario {

    constructor(
        private _id: number,
        private _nombre: string,
        private _apellidos: string,
        private _email: string
    ) { };

    get id(): number { return this._id; }
    get nombre(): string { return this._nombre; }
    get apellidos(): string { return this._apellidos; }
    get email(): string { return this._email; }

    set id(id: number) { this._id = id; }
    set nombre(nombre: string) { this._nombre = nombre; }
    set apellidos(apellidos: string) { this._apellidos = apellidos; }
    set email(email: string) { this._email = email; }
}
