import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {Globals} from '../../globals';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logged;


  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute,
              private globals: Globals) { }

  ngOnInit() {
   this.authenticationService.logged.subscribe(logged => { this.logged = logged; } );
  }

  logout() {
    this.authenticationService.logout();
    const routeWithNoParams =  this.router.url.split('?')[0];
    this.router.navigate([routeWithNoParams], {preserveQueryParams: false} );
  }

}
