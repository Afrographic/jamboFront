import { PlayerService } from './../../services/player_service';
import { Player } from './../../models/player';
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
  constructor(private router: Router) { }

  ngOnInit(): void {
    PlayerService.init();
    this.initConnectState();
  }

  initConnectState() {
    this.connected = APICallSecure.token.length > 2;
  }

  login() {
    this.router.navigate(["/login"]);
  }

  register() {
    this.router.navigate(["/register"]);
  }

  logOut() {
    PlayerService.log_out();
    this.connected = false;
  }

  create_partie() {
    this.router.navigate(["/create_partie"]);
  }

}
