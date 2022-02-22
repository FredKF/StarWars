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
  public list: Nave[]= [];
  public oneShip: Nave;
  public id : string;
  public page : number = 0;


  constructor( private starshipService : StarshipService,private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
  }

  
  ngOnInit() {
    this.starshipService.getIds(this.id)

    this.starshipService.getAllShips()
    .subscribe(ships => {
      this.list = ships;
    });

   // this.router.navigate(['/starships', this.id])
  
  }

  
}

