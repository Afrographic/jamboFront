import { UserService } from './../../../services/user_service';
import { User } from './../../../models/user';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-username',
  templateUrl: './add-username.component.html',
  styleUrls: ['./add-username.component.scss']
})
export class AddUsernameComponent implements OnInit {

  user: User = UserService.user;
  show_invalid_pseudo_error = false;
  show_pseudo_already_taken_error = false;
  checking_if_pseudo_taken = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  go_to_home() {
    history.back();
  }

  async check_if_pseudo_taken() {
    this.checking_if_pseudo_taken = true;
    UserService.user = this.user;
    let already_taken = await UserService.check_if_pseudo_taken();
    this.checking_if_pseudo_taken = false;
    return already_taken;
  }

  clear_state_messages() {
    this.show_invalid_pseudo_error = false;
    this.show_pseudo_already_taken_error = false;
  }

  async go_to_add_password_proxy() {
    this.clear_state_messages();
    let field_ok = true;
    if (this.user.user_pseudo.trim().length < 3) {
      field_ok = false;
      this.show_invalid_pseudo_error = true;
      return;
    }
    if (await this.check_if_pseudo_taken()) {
      field_ok = false;
      this.show_pseudo_already_taken_error = true;
      return;
    }
    if (field_ok) {
      this.clear_state_messages();
      this.go_to_add_password();
    }
  }

  go_to_add_password() {
    this.router.navigate(["/register/add_password"])
  }

}
