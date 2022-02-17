import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { ListOfStarships, Nave } from '../../interface/nave.interface';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styles: [
    `p{
      cursor:pointer;
    }
    `
  ]
})
export class StarshipsListComponent implements OnInit{
  list: Nave[]= [];
  id : string = "";

  constructor( private starshipService : StarshipService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllShips();
    this.id= this.route.snapshot.paramMap.get('id')
    console.log(this.id)
  }

  getAllShips(){ 
    this.starshipService.getShips().subscribe( (ships) => this.list.push (ships.results[0]));
    console.log(this.list)


  }
  
  unaNave(id:string){
    this.router.navigate(['starships',id])
  }
}


