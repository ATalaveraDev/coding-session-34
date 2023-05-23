import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get('https://swapi.dev/api/people').pipe(map((data: any) => data.results));
  }
}
