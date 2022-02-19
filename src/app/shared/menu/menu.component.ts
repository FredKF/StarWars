import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `p{
      cursor:pointer;
    }
    img{
    width:150px;
    height:100px;
    }
    `
  
  ]
})
export class MenuComponent implements OnInit {


  constructor(  ) { }

  ngOnInit(): void{

  }



}
