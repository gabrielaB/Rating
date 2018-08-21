import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'services/hotel-service/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: any[] = [];
  userLogged: boolean = true;
  average = 0;
  reviewCount = 0;
  averagArray = [];
  ratingStars = [
    {
      id: 1,

    },
    {
      id: 2,

    },
    {
      id: 3,

    },
    {
      id: 4,

    },
    {
      id: 5,

    }
  ]

  constructor(private hotelService: HotelsService) {
    for (let a of this.averagArray) {
      console.log(a)
    }
  }

  ngOnInit() {
    this.hotels = this.hotelService.getHotels();
  }

  giveRating(starId, hotelId) {
    this.hotels[hotelId - 1].reviewCount++;
    this.averagArray['oneStar'] = this.reviewCount;
  }
}
