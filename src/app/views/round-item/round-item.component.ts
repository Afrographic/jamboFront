import { HelperFunction } from './../../utils/helper_function';
import { Round_Service } from './../../services/round.service';
import { Round } from './../../models/round.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-round-item',
  templateUrl: './round-item.component.html',
  styleUrls: ['./round-item.component.scss']
})
export class RoundItemComponent implements OnInit {

  @Input() round: Round = new Round();

  constructor() { }

  ngOnInit(): void {
    this.check_if_user_joined();
  }

  async check_if_user_joined() {
    let data = await Round_Service.user_on_round(this.round.round_id);
    this.round.joined = data.on_it;
  }

  async join() {
    let status = await Round_Service.join(this.round.round_id);
    if (status == 200) {
      this.round.joined = true;
      HelperFunction.show_positive_message("Vous avez rejoinds la partie")
      return;
    }
    HelperFunction.show_negative_message("Votre solde est insuffisant! veuillez recharger.");
  }

  async get_users_on_round() {
    
  }
}
