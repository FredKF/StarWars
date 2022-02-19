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
  private page : number = 0;
  public id: string = '';

  constructor (private starshipService : StarshipService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.starshipService.getAllShips()
    .subscribe(ships => {
      this.shipList = ships;
    }
    );
  
    this.id= this.route.snapshot.paramMap.get('id')
  }

  nextPage(){
    this.starshipService.getMoreShips()
    this.page ++
  }
  backPage(){
    this.starshipService.getLessShips()
    this.page --
  }

  infoShip(id:string){
    this.router.navigate(['starships',id])
  }


}


