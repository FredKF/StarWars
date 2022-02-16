import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Nave } from '../../interface/nave.interface';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styles: [
  ]
})
export class StarshipsListComponent implements OnInit{
  id : string = "";
  naves : Nave[] =[]

  constructor( private starshipService : StarshipService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showShip();
    this.id= this.route.snapshot.paramMap.get('id')
  }

  showShip(){ 
    this.starshipService.showShip().subscribe( (ships) => console.log(ships))
  }
  
  unaNave(id:number){
    this.router.navigate(['starships',id])

  }
}


