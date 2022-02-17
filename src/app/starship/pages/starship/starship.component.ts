import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Nave } from '../../interface/nave.interface';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styles: [
  ]
})
export class StarshipComponent implements OnInit {
  list: Nave[]= [];
  id : string = "";

  constructor( private starshipService : StarshipService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllShips();
    //this.id= this.route.snapshot.paramMap.get('id')
  }

  getAllShips(){ 
    this.starshipService.getShips().subscribe( (ships) => this.list.push (ships.results[0]));
    console.log(this.list)
  }
  


}

