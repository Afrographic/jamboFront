import { Round } from './../../models/round.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-item',
  templateUrl: './round-item.component.html',
  styleUrls: ['./round-item.component.scss']
})
export class RoundItemComponent implements OnInit {
  @Input() round: Round = new Round();
  constructor() { }

  ngOnInit(): void {
  }

  join() {
    
  }

}
