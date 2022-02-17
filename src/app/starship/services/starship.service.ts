import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfStarships, Nave } from '../interface/nave.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  private apiUrl : string = 'https://swapi.dev/api/starships/'
  id :string = '';
  ships : ListOfStarships[] = []

  constructor( private http : HttpClient) { }

  getShips(): Observable<ListOfStarships>{
    const url = `${ this.apiUrl}`;
     return this.http.get<ListOfStarships>(url)
  }

}
