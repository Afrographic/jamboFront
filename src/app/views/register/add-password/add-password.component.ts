import { User } from './../../../models/user';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user_service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.scss']
})
export class AddPasswordComponent implements OnInit {

  user: User = UserService.user;
  show_invalid_password_error = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    $("#password_field").focus();
  }

  go_to_add_pseudo() {
    history.back();
  }


  clear_state_messages() {
    this.show_invalid_password_error = false;
  }

  async go_to_add_confirm_password_proxy() {
    this.clear_state_messages();
    let field_ok = true;
    if (this.user.user_password.trim().length < 8) {
      field_ok = false;
      this.show_invalid_password_error = true;
      return;
    }
    if (field_ok) {
      this.clear_state_messages();
      this.go_to_add_confirm_password();
    }
  }

  go_to_add_confirm_password() {
    this.router.navigate(["/register/add_confirm_password"])
  }

}


declare var $: any;