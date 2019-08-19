import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import {fakeBackendProvider} from "./helpers/fake-backend";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./app-routing/AuthGuard";
import {JwtInterceptor} from "src/app/helpers/jwt.interceptor";
import { ProfileComponent } from './components/profile/profile.component';
import {Globals} from "./globals";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    Globals,
    // providers used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
