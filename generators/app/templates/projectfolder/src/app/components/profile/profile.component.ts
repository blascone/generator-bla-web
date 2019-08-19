import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  logged;

  constructor(private authenticationService: AuthenticationService) {

    this.authenticationService.logged.subscribe(logged => {
      if (logged) {
        this.logged = logged;
        this.user = this.authenticationService.currentUser;
      }
    });

  }

  ngOnInit() {
  }

}
