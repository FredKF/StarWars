import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from './pages/starships-list/starships-list.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { LoginComponent } from '../components/login/login.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ 
    StarshipsListComponent,
    StarshipComponent,
    LoginComponent,
    FiltroPipe
  ],
  exports:[
    StarshipsListComponent,
     StarshipComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class StarshipsModule { }
