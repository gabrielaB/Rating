import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelsDetailsComponent } from './hotels-details/hotels-details.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DestinationsDetailsComponent } from './destinations-details/destinations-details.component';
import { RulesComponent } from './rules/rules.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotel/:id', component: HotelsDetailsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: '', component: HomeComponent }, 
  { path: 'destinations', component: DestinationsComponent },      
  { path: 'destinations/:id', component: DestinationsDetailsComponent },
  { path: 'rules', component: RulesComponent }, 
  { path: 'login', component: LoginComponent },      
       
         
];

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelsDetailsComponent,
    RestaurantsComponent,
    HomeComponent,
    DestinationsComponent,
    DestinationsDetailsComponent,
    RulesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
