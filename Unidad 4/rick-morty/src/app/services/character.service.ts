import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private _baseUrl: string = 'https://rickandmortyapi.com/api/character';

  constructor(private _httpClient: HttpClient) { }

  public findAll(): Observable<Character[]> {
    return this._httpClient
      .get<{ info: any, results: Character[] }>(this._baseUrl)
      .pipe(
        map(data => data.results)
      );
  }

}
