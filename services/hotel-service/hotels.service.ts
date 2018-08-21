import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
 
  constructor() { }

  getHotels(){
    return  [
      {
        id:1,
        img:"../assets/marinela-front.jpg",
        name: "Marinela",
        address: "James Bouirchier 75",
        averageRating:0,
        reviewCount:0,
        rating:0
      },
      {
        id:2,
        img:"../assets/bestwestern-front.jpg",
        name: "Best Western",
        address: "Jultite paveta",
        averageRating:0,
        reviewCount:0,
        rating:0
      },
      {
        id:3,
        img:"../assets/marinela-front.jpg",
        name: "Radisson",
        address: "Jultite paveta",
        averageRating:0,
        reviewCount:0,
        rating:0
      }
    ]
  };
}
