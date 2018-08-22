import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor() { }

  getDestinations(){
    return  [
      {
        id:1,
        img:"../assets/florence.jpg",
        name: "Флоренция",
      },
      {
        id:2,
        img:"../assets/lucca.jpg",
        name: "Лука",
      },
      {
        id:3,
        img:"../assets/elba.jpg",
        name: "Елба",
      }
    ]
  }
}
