import { Game } from './../../../models/game';
import { Currency, GameService } from './../../../services/game_service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-partie',
  templateUrl: './create-partie.component.html',
  styleUrls: ['./create-partie.component.scss']
})
export class CreatePartieComponent implements OnInit {
  game: Game = new Game();
  currencies: Currency[] = GameService.currencies;
  current_currency_index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  back() {
    history.back();
  }

  create_proxy() {
    let fields_Ok = true;

    if (fields_Ok) {
      this.create();
    }
  }

  create() {
    
  }

  select_currency(currency_index: number) {
    if (this.current_currency_index == currency_index) return;
    this.currencies[this.current_currency_index].active = false;
    this.currencies[currency_index].active = true;
    this.current_currency_index = currency_index;
  }

}
