import { User } from './../../../models/user';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user_service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-confirm-password',
  templateUrl: './add-confirm-password.component.html',
  styleUrls: ['./add-confirm-password.component.scss']
})
export class AddConfirmPasswordComponent implements OnInit {
  user: User = UserService.user;
  show_invalid_password_error = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    $("#confirm_password_field").focus();
  }

  go_to_add_pseudo() {
    history.back();
  }


  clear_state_messages() {
    this.show_invalid_password_error = false;
  }

  async go_to_add_email_proxy() {
    this.clear_state_messages();
    let field_ok = true;
    if (this.user.user_password != this.user.user_confirm_password) {
      field_ok = false;
      this.show_invalid_password_error = true;
      return;
    }
    if (field_ok) {
      this.clear_state_messages();
      this.go_to_add_email();
    }
  }

  go_to_add_email() {
    this.router.navigate(["/register/add_email"])
  }

}

declare var $: any;
