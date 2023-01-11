import { HelperFunction } from './../../../utils/helper_function';
import { Game_Service } from './../../../services/game_service';
import { Game } from './../../../models/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-duration',
  templateUrl: './edit-duration.component.html',
  styleUrls: ['./edit-duration.component.scss']
})
export class EditDurationComponent implements OnInit {
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

    if (this.game.game_duration < 10) {
      HelperFunction.show_negative_message("Une partie doit durer au minimum 10s!")
      fields_Ok = false;
      return;
    }

    if (fields_Ok) {

      this.edit();
    }
  }

  async edit() {
    this.editing = true;
    let status = await Game_Service.edit_duration(this.game);
    this.editing = false;
    if (status != 200) {
      HelperFunction.show_negative_message("Erreur serveur!")
      return;
    }
    HelperFunction.show_positive_message("Duree editer avec succes!");
    this.back();
  }

}
