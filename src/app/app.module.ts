import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelsDetailsComponent } from './hotels-details/hotels-details.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotel/:id', component: HotelsDetailsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'home', component: HomeComponent },      
];

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelsDetailsComponent,
    RestaurantsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
