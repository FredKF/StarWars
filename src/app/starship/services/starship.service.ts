import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { ListOfStarships, Nave } from '../interface/nave.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  private apiUrl : string = 'https://swapi.dev/api/starships';
  private pageUrl :string = 'https://swapi.dev/api/starships/?page=';
  private page : number = 0;
  private id : string = '';


  constructor( private http : HttpClient) { }


  listShips(pag?:string): Observable<ListOfStarships>{
    let list =`${this.pageUrl}${pag}`
    return this.http.get<ListOfStarships>(list)
  }

  getAllShips(): Observable<Nave[]>{
     return this.http.get<ListOfStarships>(`${this.apiUrl}`)
     .pipe(
       map(this.getAll)
     )
    
  }
  private getAll(resp : ListOfStarships){
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


  getIds(id:string){ 
    return`${this.apiUrl}`+`:${id}`  
   
  }
 
  getMoreShips(): Observable<ListOfStarships>{
    if(this.page < 4) this.page ++
    console.log(`${this.pageUrl}${this.page}`)
    return this.http.get<ListOfStarships>(`${this.pageUrl}${this.page}`)
  }
  getLessShips(): Observable<ListOfStarships>{
    if(this.page > 0) this.page --
    console.log(`${this.pageUrl}${this.page}`)
    return this.http.get<ListOfStarships>(`${this.pageUrl}${this.page}`)
  }


}
