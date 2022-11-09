import { Router } from '@angular/router';
import { APICallSecure } from './../../services/api_call_secure';
import { APICallOpen } from './../../services/api_call_open';
import { Player } from './../../models/player';
import { Component, OnInit } from '@angular/core';
import { Validator } from 'src/app/utils/validator';
import { sleep } from 'src/app/utils/tools';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registering = false;
  player: Player = new Player();
  pseudoStep = true;
  passwordStep = false;
  confirmPasswordStep = false;
  emailStep = false;
  createAccountActive = false;
  success = false;

  showError = false;
  errorMessage = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  async next() {
    this.showError = false;
    if (this.pseudoStep) {
      if (await this.validPseudo()) {
        this.pseudoStep = false;
        this.passwordStep = true;
      } else {
        this.showError = true;
        this.errorMessage = "Votre pseudo doit avoir au moins 03 caracteres"
      }
      return;
    }

    if (this.passwordStep) {
      if (this.validPassWord()) {
        this.passwordStep = false;
        this.confirmPasswordStep = true;
      } else {
        this.showError = true;
        this.errorMessage = "Votre mot de passe doit avoir au moins 08 caracteres"
      }

      return;
    }
    if (this.confirmPasswordStep) {
      if (this.validConfirmPassWord()) {
        this.confirmPasswordStep = false;
        this.emailStep = true;
      } else {
        this.showError = true;
        this.errorMessage = "Ce mot de passe ne correspond pas au mot de passe que vous entrez precedement!"
      }

      return;
    }
    if (this.emailStep) {
      if (this.validEmail()) {
        this.emailStep = false;
        this.createAccountActive = true;
      } else {
        this.showError = true;
        this.errorMessage = "Cet email est invalide";
      }

      return;
    }
  }

  async validPseudo() {
    // Check for unique pseudo
    return this.player.player_pseudo.trim().length > 3;
  }

  validPassWord() {
    return this.player.player_password.trim().length > 8;
  }

  validConfirmPassWord() {
    return this.player.player_password == this.player.player_confirm_password;
  }

  validEmail() {
    return Validator.correctEmail(this.player.player_email);
  }

  prev() {

    if (this.passwordStep) {
      this.passwordStep = false;
      this.pseudoStep = true;
      return;
    }
    if (this.confirmPasswordStep) {
      this.confirmPasswordStep = false;
      this.passwordStep = true;
      return;
    }
    if (this.emailStep) {
      this.emailStep = false;
      this.confirmPasswordStep = true;
      return;
    }
  }
  async register() {
    this.registering = true;
    let res = await APICallOpen.postData("http://localhost:3000/api/player", this.player);
    this.registering = false;
    if (res.status == 200) {
      this.success = true;
      this.login();
    } else {
      this.showError = true;
      this.errorMessage = "Erreur serveur , veuillez reessayer plus tard";
    }
  }

  async login() {
    await sleep(2000);
    let res = await APICallOpen.postData("http://localhost:3000/api/login", this.player);
    if (res.status == 200) {
      let token = res.token;
      APICallSecure.token = token;
      localStorage.setItem("jambo_token", token);
      // redirect to home
      this.router.navigate([""]);
    } else {
      this.showError = true;
      this.errorMessage = "Erreur serveur , veuillez reessayer plus tard";
    }
  }

  back() {
    history.back();
  }

}
