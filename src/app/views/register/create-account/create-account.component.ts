import { HelperFunction } from './../../../utils/helper_function';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user_service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  creating_account = true;
  success = false;
  error = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.register();
  }

  async register() {

    this.creating_account = true;
    let res = await UserService.register();
    this.creating_account = false;

    if (res.response.status == 200) {
      let token = res.data.token;
      UserService.save_token(token);
      this.success = true;
    this.redirect_to_home();
    } else {
      this.error = true;
      alert("Erreur serveur, veuillez reeessayer plus tard!")
    }

  }

  async redirect_to_home() {
    await HelperFunction.sleep(2000);
    this.router.navigate(["/"])
  }

}
