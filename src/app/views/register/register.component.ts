import { UserService } from 'src/app/services/user_service';
import { Router } from '@angular/router';
import { APICallSecure } from './../../services/api_call_secure';
import { APICallOpen } from './../../services/api_call_open';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Validator } from 'src/app/utils/validator';
import { sleep } from 'src/app/utils/tools';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 ngOnInit(): void {
     
 }
  constructor(){}
}
