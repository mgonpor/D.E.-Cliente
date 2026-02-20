import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {

  private readonly baseUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private _httpClient: HttpClient) { }

  findById(id: number): Observable<Episode> {
    return this._httpClient.get<any>(`${this.baseUrl}/${id}`)
      .pipe(
        map((json: any) => new Episode(
          json.id,
          json.name,
          json.air_date,
          json.episode,
          json.url,
          json.created
        ))    //Si no airDate no se coge de la API porque viene como air_date 
      );
  }

}
