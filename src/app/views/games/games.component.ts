import { Router } from '@angular/router';
import { HelperFunction } from './../../utils/helper_function';
import { Game_Service } from './../../services/game_service';
import { Game } from './../../models/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  getting_games = true;
  show_round_link = false;
  round_link = "https://monraa.jambo.cm/round?uid=45";

  creating_round = false;
  round_created = false;

  deleting = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.get_games();
  }

  async get_games() {
    this.getting_games = true;
    let res = await Game_Service.get_all();
    this.getting_games = false;
    if (res.response.status != 200) {
      HelperFunction.show_negative_message("Erreur Serveur!")
      return;
    }
    let games_json = res.data;
    this.games = Game.fromJSONArray(games_json);
  }

  back() {
    history.back();
  }

  go_to_create_partie() {
    this.router.navigate(["/create_partie"]);
  }

  async delete(game:Game) {
    if (confirm("Voules vous vraiment supprimer la partie?")) {
      this.deleting = true;
      let res = await Game_Service.delete(game.game_id);
      this.deleting = false;
      if (res.response.status == 200) {
        let game_index = this.games.indexOf(game);
        this.games.splice(game_index, 1);
        HelperFunction.show_positive_message("Partie supprimer avec succes!");
        return;
      }
      HelperFunction.show_negative_message("Erreur serveur!");
    }
  }

  edit_bet(game: Game) {
    Game_Service.game = game;
    this.router.navigate(["/games/edit_bet"]);
  }

  edit_duration(game: Game) {
    Game_Service.game = game;
    this.router.navigate(["/games/edit_duration"]);
  }

  async create_round(game: Game) {
    this.creating_round = true;
    let res = await Game_Service.create_round(game.game_id);
    this.creating_round = false;
    if (res.response.status != 200) {
      HelperFunction.show_negative_message("Erreur serveur!")
      return;
    }
    HelperFunction.show_positive_message("Lien generer avec succes!");
    let round_id = res.data.round_id;
    this.round_link = HelperFunction.generate_round_link(round_id);
    this.round_created = true;
  }

  copy_round_link() {
    HelperFunction.copy(this.round_link);
    HelperFunction.show_positive_message("Lien copier avec succes!");
    this.hide_round_link_ui();
  }

  hide_round_link_ui() {
    this.round_created = false;
  }
}
