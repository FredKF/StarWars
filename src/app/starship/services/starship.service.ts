import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nave } from '../interface/nave.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  private apiUrl : string = 'https://swapi.dev/api/starships/'

  constructor( private http : HttpClient) { }

  showShip(): Observable<Nave[]>{
    const url = `${ this.apiUrl}`;
     return this.http.get<Nave[]>(url)
  }

}
