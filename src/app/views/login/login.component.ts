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
  loading = false;
  showError = false;
  showSucess = false;
  errorMessage = "";
  successMessage = "";
  player: Player = new Player();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;
    let res = await APICallOpen.postData("http://localhost:3000/api/login", this.player);
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
