import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'services/restaurants-service/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants :any[] = [];

  constructor(private restaurantsService: RestaurantsService) { }

 ngOnInit() {
    this.restaurants = this.restaurantsService.getRestaurants();
  }
}
