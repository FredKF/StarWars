import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
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

  public shipList: Nave[]= [];
  // public page : number = 0;
  // public currentPage : number = 0;
  id: string = '';
  showMore = false;
  private scrollHeight = 200;



  constructor(@Inject(DOCUMENT) private document : Document, private starshipService : StarshipService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.starshipService.getAllShips()
    .subscribe(ships => {
      this.shipList = ships;
    }
    );

    this.id= this.route.snapshot.paramMap.get('id')

  }

  // nextPage(){
  //   this.page +=5;
  // }
  // backPage(){
  //   this.page -=5;
  // }

  unaNave(id:string){
    this.router.navigate(['starships',id])
  }

  @HostListener('window : scroll')
  onWindowScroll(): void{
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showMore = (yOffSet || scrollTop) > this.scrollHeight;
  }

  onScrollTop(): void{
    this.document.documentElement.scrollTop = 0;
  }
  onScrollDronw(): void{
    
  }
}


