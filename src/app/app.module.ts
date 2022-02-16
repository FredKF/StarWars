import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsComponent } from './starship/components/starships/starships.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { StarshipsModule } from './starship/starships.module';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StarshipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
