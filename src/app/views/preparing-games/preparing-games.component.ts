import { HelperFunction } from './../../utils/helper_function';
import { Round_Service } from './../../services/round.service';
import { Round } from './../../models/round.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preparing-games',
  templateUrl: './preparing-games.component.html',
  styleUrls: ['./preparing-games.component.scss']
})
export class PreparingGamesComponent implements OnInit {

  rounds: Round[] = [];

  can_render = false;

  constructor() { }

  ngOnInit(): void {
    this.get_rounds();
  }

  async get_rounds() {
    this.rounds = await Round_Service.get_preparing();
    this.can_render = true;
  }

  launch(index: number) {
    this.rounds.splice(index, 1);
  }

}
