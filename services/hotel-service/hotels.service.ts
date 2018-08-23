import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth-service.service';
import { map } from 'rxjs-compat/operator/map';
import 'rxjs/Rx';
import { Http } from '@angular/http';


const baseUrl = 'https:/rating-f36df.firebaseio.com/hotels/';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private authService: AuthService,
    private http: HttpClient) { }

  getAllHotels() {
    // if (this.recipesCached) {
    //   return Observable.create();
    // }

    const token = this.authService.getToken();

    return this.http.get(`${baseUrl}/.json?auth=${token}`)
      .map((res: Response) => {
       console.log(res)
      });
}
  // getHotels(){
  //   return  [
  //     {
  //       id:1,
  //       img:"../assets/marinela-front.jpg",
  //       name: "Marinela",
  //       address: "James Bouirchier 75",
  //       averageRating:0,
  //       reviewCount:0,
  //       rating:0
  //     },
  //     {
  //       id:2,
  //       img:"../assets/bestwestern-front.jpg",
  //       name: "Best Western",
  //       address: "Jultite paveta",
  //       averageRating:0,
  //       reviewCount:0,
  //       rating:0
  //     },
  //     {
  //       id:3,
  //       img:"../assets/marinela-front.jpg",
  //       name: "Radisson",
  //       address: "Jultite paveta",
  //       averageRating:0,
  //       reviewCount:0,
  //       rating:0
  //     }
  //   ]
  // }
// }
}