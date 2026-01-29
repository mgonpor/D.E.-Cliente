import { Columna } from "./columna";
import { Usuario } from "./usuario";

export class Tarea {

    constructor(
        private _id: number,
        private _titulo: string,
        private _descripcion: string,
        private _fechaCreacion: Date,
        private _columna: Columna,
        //private _usuario: Usuario
    ) { };

    get id(): number { return this._id; }
    get titulo(): string { return this._titulo; }
    get descripcion(): string { return this._descripcion; }
    get fechaCreacion(): Date { return this._fechaCreacion; }
    get columna(): Columna { return this._columna; }
    //get usuario(): Usuario { return this._usuario; }

    set id(value: number) { this._id = value; }
    set titulo(value: string) { this._titulo = value; }
    set descripcion(value: string) { this._descripcion = value; }
    set fechaCreacion(value: Date) { this._fechaCreacion = value; }
    set columna(value: Columna) { this._columna = value; }
    //set usuario(value: Usuario) { this._usuario = value; }

}
