export class Tablero {

    constructor(
        private _id: number,
        private _nombre: string,
        private _fondo: string
    ) { };

    get id(): number { return this._id; }
    get nombre(): string { return this._nombre; }
    get fondo(): string { return this._fondo; }

    set id(id: number) { this._id = id; }
    set nombre(nombre: string) { this._nombre = nombre; }
    set fondo(fondo: string) { this._fondo = fondo; }

}
