import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor() { }

  getRestaurants(){
    return  [
      {
        id:1,
        img:"../assets/mediterraneo.jpg",
        name: "Mediteraneo",
        address: "James Bouirchier 75"
      },
      {
        id:2,
        img:"../assets/mediterraneo.jpg",
        name: "Proya",
        address: "Jultite paveta"
      },
      {
        id:3,
        img:"../assets/mediterraneo.jpg",
        name: "Umbrella",
        address: "Jultite paveta"
      }
    ]
  };
}
