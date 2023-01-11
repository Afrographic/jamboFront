import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { CreateAccountComponent } from './views/register/create-account/create-account.component';
import { AddConfirmPasswordComponent } from './views/register/add-confirm-password/add-confirm-password.component';
import { AddPasswordComponent } from './views/register/add-password/add-password.component';
import { AddUsernameComponent } from './views/register/add-username/add-username.component';
import { AddEmailComponent } from './views/register/add-email/add-email.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CreatePartieComponent } from './views/partie/create-partie/create-partie.component';
import { GamesComponent } from './views/games/games.component';
import { GameItemComponent } from './views/games/game-item/game-item.component';
import { EditDurationComponent } from './views/games/edit-duration/edit-duration.component';
import { EditBetComponent } from './views/games/edit-bet/edit-bet.component';
import { OngoingGamesComponent } from './views/ongoing-games/ongoing-games.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CreatePartieComponent,
    AddEmailComponent,
    AddUsernameComponent,
    AddPasswordComponent,
    AddConfirmPasswordComponent,
    CreateAccountComponent,
    PageNotFoundComponent,
    GamesComponent,
    GameItemComponent,
    EditDurationComponent,
    EditBetComponent,
    OngoingGamesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

