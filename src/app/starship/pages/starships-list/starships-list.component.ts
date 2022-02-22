import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ListOfStarships, Nave } from '../../interface/nave.interface';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styles: [
    `.naves{
      cursor:pointer;
      background-color:#333
    }
    `
  ]
})


export class StarshipsListComponent implements OnInit{

  public shipList: Nave[]= [];
  public page : number = 0;
  public id: number;

  constructor (private starshipService : StarshipService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
  this.nextPage()

  }

  infoShip(id: number, url: string){
    let encodedUrl = encodeURIComponent(url);
    let idInUrl = parseFloat(url);
    this.router.navigate(['/starships', id, encodedUrl]);
  }

  
  nextPage(){
    this.page++
    let pag = this.page.toString()
    this.starshipService.listShips(pag).subscribe(list =>{
      this.shipList = this.shipList.concat(list.results);
      console.log(this.shipList);
    })
  }

  backPage(){
    this.page--
    let pag = this.page.toString()
    this.starshipService.listShips(pag).subscribe(list =>{
      this.shipList = this.shipList.concat(list.results);
      console.log(this.shipList);
    })
  }
}


