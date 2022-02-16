import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsListComponent } from './pages/starships-list/starships-list.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    // StarshipsComponent,
    StarshipsListComponent,
    StarshipComponent,
    LoginComponent
  ],
  exports:[
    StarshipsListComponent,
     StarshipComponent,
    // StarshipsComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class StarshipsModule { }
