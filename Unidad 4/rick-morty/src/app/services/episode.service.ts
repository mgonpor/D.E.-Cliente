import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {

  private readonly baseUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private _httpClient: HttpClient) { }

  findByUrl(url: string): Observable<Episode> {
    return this._httpClient.get<Episode>(url);
  }

  findById(id: number): Observable<Episode> {
    return this._httpClient.get<Episode>(`${this.baseUrl}/${id}`);
  }

}
