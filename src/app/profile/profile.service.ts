import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    let request = this.httpClient.get('http://localhost:3000/user');
    console.log(request);
    return request;
  }
  getUser(value: String) {
    let request = this.httpClient.get('http://localhost:3000/user/' + value);
    console.log(request);
    return request;
  }
}
