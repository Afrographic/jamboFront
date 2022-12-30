import { UserService } from './../../services/user_service';
import { User } from './../../models/user';
import { APICallSecure } from './../../services/api_call_secure';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  connected = false;
  initing = false;
  user: User = UserService.user;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.init_user();
  }

  async init_user() {
    try {
      await UserService.init();
      this.initing = false;
      this.connected = UserService.connected;

      if (this.connected) {
        this.user = UserService.user;
      }
    } catch (e) {
      this.initing = false;
    }
  }



  login() {
    this.router.navigate(["/login"]);
  }

  register() {
    this.router.navigate(["/register/add_pseudo"]);
  }

  logOut() {
    UserService.log_out();
    this.connected = false;
  }

  create_partie() {
    this.router.navigate(["/create_partie"]);
  }

}
