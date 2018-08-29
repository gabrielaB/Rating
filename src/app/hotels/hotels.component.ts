import { Component, OnInit, ViewChild } from '@angular/core';
import { HotelsService } from 'services/hotel-service/hotels.service';
import * as $ from 'jquery';
import { BindingModel } from './binding.model';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  @ViewChild('rating') rating;
  hotels: any;
  userLogged: boolean = true;
  average = 0;
  reviewCount = 0;
  averagArray = [];
  selectedCity: any = "";
  starsCount: number;
  isClicked = false;
  bindingModel = {
    name: '',
    img: '',
    city: '',
    id: 0,
    rating: 0,
    review_count: 0
  }
  givenRating= true;

  constructor(private hotelService: HotelsService) {
  }

  ngOnInit() {
    this.hotelService
      .getAllHotels()
      .subscribe((res) => {
        this.hotels = res;
        for(let h of this.hotels){
          if(h.review_count === 0){
           this.givenRating = false;
          }else{
            this.givenRating =true;
          }
        }
      });
  }

  countStars(event, hotel) {
    console.log(event.target.title)
     console.log(hotel.id)
    this.hotelService.getById(hotel.name)
      .subscribe(res => {
       res.rating+= Number(event.target.title);
      // res.isClicked = true;
       res.review_count++;
       res.average_rating = res.rating / res.review_count ;
       this.hotelService.editHotel(res)
           .subscribe(res => console.log(res))

      })
  }
  changed() {
    console.log('clicked')
  }
}

