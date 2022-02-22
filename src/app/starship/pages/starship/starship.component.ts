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
  oneShip: Nave = {};
  id : string;
  page : number = 0;
  pic = "https://starwars-visualguide.com/assets/img/starships/${id}.jpg"


  constructor( private starshipService : StarshipService,private router: Router, private route: ActivatedRoute) {
    
  }

  
  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.starshipService.getShipById(this.id).subscribe(res => {
      const result = res;
      this.oneShip.name = res.name;
      this.oneShip.model = res.model;
      this.oneShip.cost_in_credits = res.cost_in_credits;
      this.oneShip.max_atmosphering_speed = res.max_atmosphering_speed;
      this.oneShip.manufacturer = res.manufacturer;
      this.oneShip.length = res.length;
      this.oneShip.crew = res.crew;
      this.pic = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
    });
  }  
}

