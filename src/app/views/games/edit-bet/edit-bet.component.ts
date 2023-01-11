import { Game } from './../../../models/game';
import { Game_Service } from './../../../services/game_service';
import { HelperFunction } from './../../../utils/helper_function';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bet',
  templateUrl: './edit-bet.component.html',
  styleUrls: ['./edit-bet.component.scss']
})
export class EditBetComponent implements OnInit {
  editing = false;
  game: Game = Game_Service.game;

  constructor() {

  }

  ngOnInit(): void {
    this.game = Game_Service.game.clone();
  }

  back() {
    history.back();
  }

  edit_proxy() {
    let fields_Ok = true;

    if (this.game.game_bet < 100) {
      HelperFunction.show_negative_message("La mise minimum doit etre de 100F!")
      fields_Ok = false;
      return;
    }

    if (fields_Ok) {

      this.edit();
    }
  }

  async edit() {
    this.editing = true;
    let status = await Game_Service.edit_bet(this.game);
    this.editing = false;
    if (status != 200) {
      HelperFunction.show_negative_message("Erreur serveur!")
      return;
    }
    HelperFunction.show_positive_message("Mise editer avec succes!");
    this.back();
  }
}
