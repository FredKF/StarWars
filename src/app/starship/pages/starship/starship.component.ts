import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styles: [
  ]
})
export class StarshipComponent implements OnInit {
  id = " ";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id= this.route.snapshot.paramMap.get('id')
  }

}
