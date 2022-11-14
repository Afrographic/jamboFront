import { Validator } from './../../utils/validator';
import { sleep } from 'src/app/utils/tools';
import { Player } from './../../models/player';
import { Component, OnInit } from '@angular/core';
import { APICallOpen } from 'src/app/services/api_call_open';
import { APICallSecure } from 'src/app/services/api_call_secure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  player: Player = new Player();

  loading = false;
  showError = false;
  showSucess = false;
  errorMessage = "";
  successMessage = "";

  error_email: boolean = false;
  error_password: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clear_errors() {
    this.showError = false;
    this.error_email = false;
    this.error_password = false;
  }

  login_proxy() {
    this.clear_errors();
    let fields_ok = true;
    
    if (!Validator.correctEmail(this.player.player_email)) {
      this.error_email = true;
      fields_ok = false;
    }

    if (this.player.player_password.length == 0) {
      this.error_password = true;
      fields_ok = false;
    }

    if (fields_ok) {
      this.clear_errors();
      this.login();
    }
  }

  async login() {
   
    this.loading = true;
    let res = await APICallOpen.postData("/api/login", this.player);
    this.loading = false;
    if (res.status == 200) {
      let token = res.token;
      APICallSecure.token = token;
      localStorage.setItem("jambo_token", token);
      this.showSucess = true;
      this.successMessage = "Connection reussie, redirection dans 2 secondes";
      await sleep(2000);
      // redirect to home
      this.router.navigate([""]);
    } else {
      this.showError = true;
      this.errorMessage = "THis account does not exist!";
    }
  }

  back() {
    history.back();
  }

}
