import { Component } from '@angular/core';
import { CitiesService } from 'services/cities-service/cities.service';
import { HotelsService } from 'services/hotel-service/hotels.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RateMe';
  cities: any[] = [];

  constructor(private citiesService: CitiesService,
    private router: Router) {

  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBpScn9N2KXZQS0XJI3jU-IJFZ2AMDJnXs",
      authDomain: "rating-f36df.firebaseapp.com",
    databaseURL: "https://rating-f36df.firebaseio.com",
    projectId: "rating-f36df",
    })
  }
}
