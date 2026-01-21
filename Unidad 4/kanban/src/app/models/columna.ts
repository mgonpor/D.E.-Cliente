import { Tablero } from "./tablero";

export class Columna {

    constructor(
        private _id: number,
        private _nombre: string,
        private _color: string,
        private _tablero: Tablero
    ) { };

    get id(): number { return this._id; }
    get nombre(): string { return this._nombre; }
    get color(): string { return this._color; }
    get tablero(): Tablero { return this._tablero; }

    set id(id: number) { this._id = id; }
    set nombre(nombre: string) { this._nombre = nombre; }
    set color(color: string) { this._color = color; }
    set tablero(tablero: Tablero) { this._tablero = tablero; }

}
