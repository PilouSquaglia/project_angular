import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  users$: Observable<any> | undefined;
  // emailUser: String;

  // constructor(private profileService: ProfileService,
  //   emailUser: String) {
  //   this.emailUser = emailUser;
  // }
  constructor(private profileService: ProfileService,) {
  }

  ngOnInit(): void {
    this.users$ = this.profileService.getUsers();
    // this.users$ = this.profileService.getUser(this.emailUser);
  }
}
