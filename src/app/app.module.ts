import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelsDetailsComponent } from './hotels-details/hotels-details.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DestinationsDetailsComponent } from './destinations-details/destinations-details.component';
import { RulesComponent } from './rules/rules.component';

import { HeaderComponent } from './header/header.component';
import { AuthService } from 'services/auth-service.service';
import { ToastInjector, ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Http, HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptors';



const appRoutes: Routes = [
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotel/:id', component: HotelsDetailsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: '', component: HomeComponent }, 
  { path: 'destinations', component: DestinationsComponent },      
  { path: 'destinations/:id', component: DestinationsDetailsComponent },
  { path: 'rules', component: RulesComponent }, 
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },                      
                        
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
    LoginComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [AuthService,HttpClient, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
