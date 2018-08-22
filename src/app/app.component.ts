import { Component } from '@angular/core';
import { CitiesService } from 'services/cities-service/cities.service';
import { HotelsService } from 'services/hotel-service/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RateMe';
  cities: any[] = [];

  constructor(private citiesService: CitiesService,
  private router :Router) {

  }

  ngOnInit(){
    this.cities = this.citiesService.getCities()
  }

  selectedCity(city){
   console.log(city)
   this.router.navigateByUrl('/hotels');
  }
}
