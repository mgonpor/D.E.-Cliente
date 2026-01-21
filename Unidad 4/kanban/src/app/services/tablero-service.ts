import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tablero } from '../models/tablero';

@Injectable({
  providedIn: 'root',
})
export class TableroService {

  private url = "mocks_json/tableros.json";

  constructor(private http: HttpClient) { }

  getTableros(): Observable<Tablero[]> {
    return this.http.get<Tablero[]>(this.url);
  }

}
