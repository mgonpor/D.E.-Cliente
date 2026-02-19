import { Location } from "./location";

export class Character {

    constructor(
        private _id: number,
        private _name: string,
        private _status: string,
        private _species: string,
        private _type: string,
        private _gender: string,
        private _origin: Location,
        private _location: Location,
        private _image: string,
        private _episode: string[],
        private _url: string,
        private _created: Date
    ) { }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
    public get species(): string {
        return this._species;
    }
    public set species(value: string) {
        this._species = value;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }
    public get origin(): Location {
        return this._origin;
    }
    public set origin(value: Location) {
        this._origin = value;
    }
    public get location(): Location {
        return this._location;
    }
    public set location(value: Location) {
        this._location = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    public get episode(): string[] {
        return this._episode;
    }
    public set episode(value: string[]) {
        this._episode = value;
    }
    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
    public get created(): Date {
        return this._created;
    }
    public set created(value: Date) {
        this._created = value;
    }
}
