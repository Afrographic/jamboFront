import { Game_Service } from './../../../services/game_service';
import { HelperFunction } from './../../../utils/helper_function';
import { Game } from './../../../models/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-partie',
  templateUrl: './create-partie.component.html',
  styleUrls: ['./create-partie.component.scss']
})
export class CreatePartieComponent implements OnInit {
  game: Game = new Game();

  creating = false;

  constructor() { }

  ngOnInit(): void {
  }

  back() {
    history.back();
  }

  create_proxy() {
    let fields_Ok = true;

    if (this.game.game_bet < 100) {
      HelperFunction.show_negative_message("La mise minimum doit etre de 100F!")
      fields_Ok = false;
      return;
    }

    if (this.game.game_duration < 10) {
      HelperFunction.show_negative_message("Une partie doit durer au minimum 10s")
      fields_Ok = false;
      return;
    }

    if (fields_Ok) {
      this.create();
    }
  }

  async create() {
    this.creating = true;
    let res = await Game_Service.create(this.game);
    this.creating = false;
    if (res.response.status == 200) {
      this.game = new Game();
      HelperFunction.show_positive_message("Partie cree avec succes!");
      return;
    }
    HelperFunction.show_negative_message("Erreur serveur!")
  }

}
