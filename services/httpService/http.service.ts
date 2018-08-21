import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

const baseUrl = 'http://localhost:3000';
const GET = 'GET';
const POST = 'POST';
const DELETE = 'DELETE';
const PUT = "PUT";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token: string;

  constructor(
    private http: Http) {
  }

  get(url, authenticated = true) {
    const requestOptions = this.getRequestOptions(GET, authenticated);
    return this.http.get(`${baseUrl}${url}`, requestOptions)
      .map((res: any) => res.json());
  }

  post(url, data, authenticated = true) {
    const requestOptions = this.getRequestOptions(POST, authenticated);
    return this.http.post(`${baseUrl}${url}`, JSON.stringify(data), requestOptions)
      .map((res: any) => res.json());
  };

  delete(url, authenticated = true) {
    const requestOptions = this.getRequestOptions(DELETE, authenticated);
    return this.http.delete(`${baseUrl}${url}`, requestOptions)
      .map((res: any) => res.json());
  };

  put(url, data, authenticated = true) {
    const requestOptions = this.getRequestOptions(PUT, authenticated);
    return this.http.put(`${baseUrl}${url}`, JSON.stringify(data), requestOptions)
      .map((res: any) => res.json());
  };

  private getRequestOptions(method, authenticated): RequestOptions {

    //get fresh token before request
    // this.getToken();

    const headers = new Headers();
    if (method === POST || method === DELETE || method === PUT) {
      headers.append('Content-Type', 'application/json');
    }

    if (authenticated) {
      headers.append('token', `${this.token}`);
      // console.log(this.token)
    }

    return new RequestOptions({ headers });
  }

  // async getToken() {
  //   await this.authService.getToken()
  //     .then(token => this.token = token);
  }

