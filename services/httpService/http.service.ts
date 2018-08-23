import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as $ from 'jquery';

const baseUrl = 'https://baas.kinvey.com/';
const appKey = 'kid_B1SeWk3U7';
const appSecret = '38fa334cf71a41ccb75062d933891599'

// const GET = 'GET';
// const POST = 'POST';
// const DELETE = 'DELETE';
// const PUT = "PUT";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token: string;

  constructor(
    private http: Http) {
  }

  makeAuth(type) {
    if (type === 'basic') return 'Basic ' + btoa(appKey + ':' + appSecret);
    else return 'Kinvey ' + localStorage.getItem('authtoken');
  };
  
  makeRequest(method, module, url, auth) {
    let req = {
      url: baseUrl + module + '/' + appKey + '/' + url,
      method,
      headers: {
        'Authorization': this.makeAuth(auth)
      }
    };
    return req;
  }
    get(module, url, auth) {
      return $.ajax(this.makeRequest('GET', module, url, auth));
  }

    // get(url, authenticated = true) {
    //   const requestOptions = this.getRequestOptions(GET, authenticated);
    //   return this.http.get(`${baseUrl}${url}`, requestOptions)
    //     .map((res: any) => res.json());
    // }

    // post(url, data, authenticated = true) {
    //   const requestOptions = this.getRequestOptions(POST, authenticated);
    //   return this.http.post(`${baseUrl}${url}`, JSON.stringify(data), requestOptions)
    //     .map((res: any) => res.json());
    // };

    // delete(url, authenticated = true) {
    //   const requestOptions = this.getRequestOptions(DELETE, authenticated);
    //   return this.http.delete(`${baseUrl}${url}`, requestOptions)
    //     .map((res: any) => res.json());
    // };

    // put(url, data, authenticated = true) {
    //   const requestOptions = this.getRequestOptions(PUT, authenticated);
    //   return this.http.put(`${baseUrl}${url}`, JSON.stringify(data), requestOptions)
    //     .map((res: any) => res.json());
    // };

    // private getRequestOptions(method, authenticated): RequestOptions {

    //   //get fresh token before request
    //   // this.getToken();

    //   const headers = new Headers();
    //   if (method === POST || method === DELETE || method === PUT) {
    //     headers.append('Content-Type', 'application/json');
    //   }

    //   if (authenticated) {
    //     headers.append('token', `${this.token}`);
    //     // console.log(this.token)
    //   }

    //   return new RequestOptions({ headers });
    // }

    // async getToken() {
    //   await this.authService.getToken()
    //     .then(token => this.token = token);
    // }

  }
