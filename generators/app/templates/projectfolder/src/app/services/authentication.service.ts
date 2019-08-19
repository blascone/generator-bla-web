import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {map} from 'rxjs/internal/operators';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  public currentUser: User;
  @Output()
  logged = new EventEmitter<boolean>();


  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }



  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', {username: username, password: password}).pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));

          this.currentUser = user;
          this.logged.emit(true);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out;
    localStorage.removeItem('currentUser');
    this.logged.emit(false);
    location.reload();
  }


  isLogged(): boolean {
    if (localStorage.getItem('currentUser')) {
      this.logged.emit(true);
      return true;
    } else {
      this.logged.emit(false);
      return false;
    }
  }
}
