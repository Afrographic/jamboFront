import { CreateAccountComponent } from './views/register/create-account/create-account.component';
import { AddEmailComponent } from './views/register/add-email/add-email.component';
import { AddConfirmPasswordComponent } from './views/register/add-confirm-password/add-confirm-password.component';
import { AddPasswordComponent } from './views/register/add-password/add-password.component';
import { AddUsernameComponent } from './views/register/add-username/add-username.component';
import { CreatePartieComponent } from './views/partie/create-partie/create-partie.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      {
        path: 'add_pseudo',
        component:AddUsernameComponent
      },
      {
        path: "add_password",
        component:AddPasswordComponent
      },
      {
        path: 'add_confirm_password',
        component:AddConfirmPasswordComponent
      },
      {
        path: 'add_email',
        component:AddEmailComponent
      },
      {
        path: "create_account",
        component:CreateAccountComponent
      }
    ]
  },
  {
    path: 'create_partie',
    component: CreatePartieComponent,
  },
  {
    path: '**', pathMatch: 'full',
    component: PageNotFoundComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
