import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthenticationService} from '../../services/authentication.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;
  logged;

  constructor(private authenticationService: AuthenticationService ) {

    this.authenticationService.logged.subscribe(logged => {
      if (logged) {
        this.user = this.authenticationService.currentUser;
        this.logged = logged;
      }
    });


  }

  ngOnInit() {



  }

}
