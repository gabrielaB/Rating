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

    return this.http.get(`${baseUrl}/.json`)
      .map(res => {
        return Object.values(res)
      })
  }

  getById(id : string) {
    return this.http.get(`${baseUrl}${id}.json`)
    .map((res:any) => {return res})
  }

  editHotel(body) {
    console.log('boy'+body)
   return this.http.patch(`${baseUrl}${body.name}/.json`, body);
  }
}