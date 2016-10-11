import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  ngOnInit() {
  }

  // TODO LOGIN COMPONENT?
  // TODO ADMIN PORTAL: allow me to add new projects and blog posts etc?
  // TODO Pagenagation for projects

  login() {

  }

  logout() {
    this.af.auth.logout();
  }

}
