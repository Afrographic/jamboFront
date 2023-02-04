import { Round_Service } from './../../services/round.service';
import { Round } from './../../models/round.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ongoing-games',
  templateUrl: './ongoing-games.component.html',
  styleUrls: ['./ongoing-games.component.scss']
})
export class OngoingGamesComponent implements OnInit {


  rounds: Round[] = [];

  can_render = false;

  constructor() { }

  ngOnInit(): void {
    this.get_rounds();
  }

  async get_rounds() {
    this.rounds = await Round_Service.get_ongoing();
    this.can_render = true;
  }

}
