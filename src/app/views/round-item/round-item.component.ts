import { UserService } from 'src/app/services/user_service';
import { APICallSecure } from 'src/app/services/api_call_secure';
import { HelperFunction } from './../../utils/helper_function';
import { Round_Service } from './../../services/round.service';
import { Round } from './../../models/round.model';
import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-round-item',
  templateUrl: './round-item.component.html',
  styleUrls: ['./round-item.component.scss']
})
export class RoundItemComponent implements OnInit,OnDestroy {
  @Output() on_launch = new EventEmitter();
  @Input() round: Round = new Round();
  total_player = 0;
  can_render_total_player = false;

  user_id = UserService.user.user_id;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.check_if_user_joined();
    this.get_users_on_round();
    this.pool_joined_user();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  pool_joined_user() {
    this.interval = setInterval(() => {
      this.get_users_on_round();
     }, 5000);
  }

  async check_if_user_joined() {
    let data = await Round_Service.user_on_round(this.round.round_id);
    this.round.joined = data.on_it;
  }

  async join() {
    let status = await Round_Service.join(this.round.round_id);
    if (status == 200) {
      this.round.joined = true;
      HelperFunction.show_positive_message("Vous avez rejoinds la partie");
      this.total_player++;
      this.round.joined = true;
      return;
    }
    HelperFunction.show_negative_message("Votre solde est insuffisant!");
  }

  async get_users_on_round() {
    let res = await APICallSecure.get_data("/round_player/round/" + this.round.round_id);
    if (res.response.status == 200) {
      this.total_player = res.data.length;
      this.can_render_total_player = true;
      return;
    }
    HelperFunction.show_negative_message("Erreur serveur!")
  }

  get_elapsed_time(date: any) {
    return HelperFunction.get_elapsed_time(date);
  }

  launch_proxy() {
    if (this.total_player < 2) {
      HelperFunction.show_negative_message("2 Joueurs minimum pour lancer");
      return;
    }
    this.launch();
  }

  async launch() {
    let res = await APICallSecure.update_data("/launch/round/" + this.round.round_id, {});
    if (res.response.status == 200) {
      HelperFunction.show_positive_message("Round lancee");
      this.on_launch.emit();
      return;
    }
    HelperFunction.show_negative_message("Erreur serveur!");
  }
}
