import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = new FormControl('');
  password = new FormControl('');
  loginForm = new FormGroup('');
  login$: Observable<any> | undefined;

  checkoutForm = this.formBuilder.group({
    email:this.email,
    password:this.password,
  })

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private httpClient : HttpClient){
  }

  ngOnInit(): void {
    this.loginService.loginUsers();
  }

  onSubmit(): void {
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    console.log("#1");
    console.log(this.checkoutForm.value);
    // this.httpClient.postLogin(this.checkoutForm.value);
    // this.httpClient.post('http://localhost:3000/login/test', this.checkoutForm.value)
    this.httpClient.post<any>('http://localhost:3000/login', this.checkoutForm.value).subscribe();
    this.checkoutForm.reset();
  }
}
