import { UserService } from 'src/app/services/user_service';
import { User } from './../../../models/user';

import { Validator } from './../../../utils/validator';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.scss']
})
export class AddEmailComponent implements OnInit {

  user: User = UserService.user;
  show_invalid_email_error = false;
  show_email_already_taken_error = false;
  checking_if_email_taken = false;
  creating_account = false;
  creation_success = false;
  server_error = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    $("#email_field").focus();
  }

  go_to_home() {
    history.back();
  }

  async email_taken() {
    this.checking_if_email_taken = true;
    UserService.user = this.user;
    let already_taken = await UserService.check_if_email_taken();
    this.checking_if_email_taken = false;
    return already_taken;
  }

  clear_state_messages() {
    this.show_invalid_email_error = false;
    this.show_email_already_taken_error = false;
  }


  go_to_add_password() {
    this.router.navigate(["/register/add_password"])
  }

  go_to_login() {
    this.router.navigate(["/login"])
  }

  go_to_create_account() {
    this.router.navigate(["/register/create_account"])
  }


  async go_to_create_account_proxy() {
    this.clear_state_messages();
    let field_ok = true;

    if (!Validator.valid_email(this.user.user_email)) {
      field_ok = false;
      this.show_invalid_email_error = true;
      return;
    }

    if ((await this.email_taken())) {
      field_ok = false;
      this.show_email_already_taken_error = true;
      return;
    }

  
    if (field_ok) {
      this.clear_state_messages();
      this.go_to_create_account();
    }
  }


 

}

declare var $: any;