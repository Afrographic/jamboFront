import { PreparingGamesComponent } from './views/preparing-games/preparing-games.component';
import { OngoingGamesComponent } from './views/ongoing-games/ongoing-games.component';
import { Edit_Game_Guard } from './guards/edit_game.guard';
import { EditBetComponent } from './views/games/edit-bet/edit-bet.component';
import { EditDurationComponent } from './views/games/edit-duration/edit-duration.component';
import { GamesComponent } from './views/games/games.component';
import { AuthGuard } from './guards/auth.gaurd';
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
        component: AddUsernameComponent
      },
      {
        path: "add_password",
        component: AddPasswordComponent
      },
      {
        path: 'add_confirm_password',
        component: AddConfirmPasswordComponent
      },
      {
        path: 'add_email',
        component: AddEmailComponent
      },
      {
        path: "create_account",
        component: CreateAccountComponent
      }
    ]
  },
  {
    path: 'create_partie',
    component: CreatePartieComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'on_going_games',
    component: OngoingGamesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'preparing_games',
    component: PreparingGamesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'games',
    component: GamesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "edit_duration",
        component: EditDurationComponent,
        canActivate: [Edit_Game_Guard]
      },
      {
        path: "edit_bet",
        component: EditBetComponent,
        canActivate: [Edit_Game_Guard]
      },
    ]
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
