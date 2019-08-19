import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../components/page-not-found/page-not-found.component";
import {HomeComponent} from "../components/home/home.component";
import {LoginComponent} from "../components/login/login.component";
import {from} from "rxjs/index";
import {AuthGuard} from "./AuthGuard";
import {ProfileComponent} from "../components/profile/profile.component";


const appRoutes: Routes = [

  {
    path: 'login',
    data: {title: 'Login'},
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Home'}
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {title: 'Profile'},
    canActivate: [AuthGuard]

  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
      //,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
