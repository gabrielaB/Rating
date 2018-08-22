import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }
  getCities() {
    return [
      {
        id: 1,
        img: "../assets/marinela-front.jpg",
        name: "София"
      },
      {
        id: 2,
        img: "../assets/bestwestern-front.jpg",
        name: "Атина",
      },
      {
        id: 3,
        img: "../assets/marinela-front.jpg",
        name: "Русе",
      }
    ]
  }
}
