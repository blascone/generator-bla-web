import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {first} from 'rxjs/internal/operators';
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  error = '';
  success = '';
  logged;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {

    this.authenticationService.logged.subscribe(logged => {
      this.logged = logged;
      this.user = this.authenticationService.currentUser;
      this.onLogged(logged);
    });

  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password).pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error.error.message;
          this.loading = false;
        });
  }

  onLogged(isLogged: boolean) {
    if (isLogged) {
      this.success = "SUCCESS";
    }
    else {
      this.success = null;
    }
  }
}
