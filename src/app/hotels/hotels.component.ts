import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'services/hotel-service/hotels.service';
import * as $ from 'jquery';

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
  selectedCity: any = "";
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

  }

  ngOnInit() {
    this.hotelService
      .getAllHotels()
      .subscribe((res) => {
        console.log(res)
      });
  }

  giveRating(starId, hotelId) {
    let hotel = this.hotels[hotelId - 1];
    hotel.reviewCount++;
    hotel.rating += starId;
    console.log(hotel.rating)
    hotel.averageRating = hotel.reviewCount / hotel.rating;
    $('.rating-button fa fa-star').click(function (e) {
      $('.rating-button fa fa-star').removeClass("fa fa-star").addClass("fa fa-star checked");
    });
  }
}
