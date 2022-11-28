import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users$: Observable<any> | undefined;

  constructor(private homeService: HomeService){
  }

  ngOnInit(): void {
    this.users$ = this.homeService.getUsers();
  }


}
