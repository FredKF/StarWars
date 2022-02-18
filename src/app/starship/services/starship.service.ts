import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { ListOfStarships, Nave } from '../interface/nave.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  private apiUrl : string = 'https://swapi.dev/api/starships'


  constructor( private http : HttpClient) { }

  getShipsByPages(pageNum : number){
    
  }

  getAllData(): Observable<ListOfStarships>{
    return this.http.get<ListOfStarships>(`${this.apiUrl}`)
 }


  getAllShips(): Observable<Nave[]>{
     return this.http.get<ListOfStarships>(`${this.apiUrl}`)
     .pipe(
       map(this.getId)
     )
  }

  private getId(resp : ListOfStarships): Nave[]{
     return resp.results.map(ship =>{
       const urlArr = ship.url.split('/');
       const id = urlArr[5];
       const pic = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`

       return{
         id,
         pic,
         name: ship.name,  
         model: ship.model,
         manufacturer: ship.manufacturer,
         cost_in_credits:ship.cost_in_credits,
         length: ship.length,    
         max_atmosphering_speed:ship.max_atmosphering_speed,
         crew:ship.crew,
         url: ship.url
       }
     })
  }

}
