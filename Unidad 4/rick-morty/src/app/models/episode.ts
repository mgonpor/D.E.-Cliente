export class Episode {

    constructor(
        private _id: number,
        private _name: string,
        private _airDate: string,
        private _episode: string,
        private _url: string,
        private _created: string
    ) { }

    public get id(): number {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public get airDate(): string {
        return this._airDate;
    }
    public get episode(): string {
        return this._episode;
    }
    public get url(): string {
        return this._url;
    }
    public get created(): string {
        return this._created;
    }

}
