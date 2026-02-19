import { Character } from "./character";

export class Response {

    constructor(
        private _info: Info,
        private _results: Character[]
    ) { }

    get info(): Info {
        return this._info;
    }

    get results(): Character[] {
        return this._results;
    }

}

export class Info {

    constructor(
        private _count: number,
        private _pages: number,
        private _next: string,
        private _prev: string
    ) { }

    get count(): number {
        return this._count;
    }

    get pages(): number {
        return this._pages;
    }

    get next(): string {
        return this._next;
    }

    get prev(): string {
        return this._prev;
    }

}