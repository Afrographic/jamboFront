import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-partie',
  templateUrl: './create-partie.component.html',
  styleUrls: ['./create-partie.component.scss']
})
export class CreatePartieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  back() {
    history.back();
  }

}
