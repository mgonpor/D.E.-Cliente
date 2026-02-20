import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  private readonly baseUrl = 'https://rickandmortyapi.com/api/location';

  constructor(private _httpClient: HttpClient) { }

  findById(id: number): Observable<Location> {
    return this._httpClient.get<Location>(`${this.baseUrl}/${id}`);
  }

}
