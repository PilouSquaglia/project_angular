import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  loginUsers(){
    return this.httpClient.get('http://localhost:3000/login');
  }

  postLogin(values : {}){
    console.log("#2")
    let values_post = JSON.stringify(values)
    console.log(values_post);
    return this.httpClient.post('http://localhost:3000/login', values_post)
  }
}
