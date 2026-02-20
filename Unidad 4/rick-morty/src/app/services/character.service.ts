import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private _baseUrl: string = 'https://rickandmortyapi.com/api/character';

  constructor(private _httpClient: HttpClient) { }

  public findAll(url: string | undefined): Observable<Response> {
    if (url) {
      return this._httpClient
        .get<Response>(url).pipe(
          map((response: Response) => {
            response.results.forEach((character: Character) => {
              character.location.id = this.extractId(character.location.url);
            });
            return response;
          })
        );
    } else {
      return this._httpClient
        .get<Response>(this._baseUrl).pipe(
          map((response: Response) => {
            response.results.forEach((character: Character) => {
              character.location.id = this.extractId(character.location.url);
            });
            return response;
          })
        );
    }
  }

  public findById(id: number): Observable<Character> {
    return this._httpClient
      .get<Character>(this._baseUrl + '/' + id)
      .pipe(
        map((character: Character) => {
          character.location.id = this.extractId(character.location.url);
          return character;
        })
      );
  }

  private extractId(url: string): number {
    return Number(url.split('/').pop());
  }
}