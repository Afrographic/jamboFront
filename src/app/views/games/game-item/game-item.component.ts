import { Game } from './../../../models/game';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  @Input() game: Game = new Game();
  @Output() on_edit_duration = new EventEmitter();
  @Output() on_edit_bet = new EventEmitter();
  @Output() on_delete = new EventEmitter();
  @Output() on_create_round = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  create_round() {
    this.on_create_round.emit();
  }

  edit_duration() {
    this.on_edit_duration.emit();
  }
  
  edit_bet() {
    this.on_edit_bet.emit();
  }

  delete() {
    this.on_delete.emit();
  }

}
