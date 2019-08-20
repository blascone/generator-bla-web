import {Component, isDevMode, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = '<%= name %>';
  isDev = false;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isDev = isDevMode();

    // check if logged every time route is changed
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.authenticationService.isLogged();
      }
    });

  }
}
