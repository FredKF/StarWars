import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { StarshipsModule } from './starship/starships.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StarshipsModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
