export class Location {

    constructor(
        private _id: number,
        private _name: string,
        private _type: string,
        private _dimension: string,
        private _url: string,
        private _created: Date
    ) { }

    public get id(): number {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }
    public get name(): string {
        return this._name;
    }
    public get type(): string {
        return this._type;
    }
    public get dimension(): string {
        return this._dimension;
    }
    public get url(): string {
        return this._url;
    }
    public get created(): Date {
        return this._created;
    }

}
