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

  checkoutForm = this.formBuilder.group({
    email:this.email,
    password:this.password,
  })

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder){
  }

  ngOnInit(): void {
    this.loginService.loginUsers();
  }

  onSubmit(): void {
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    console.log("#1");
    console.log(this.checkoutForm.value);
    this.loginService.postLogin(this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
