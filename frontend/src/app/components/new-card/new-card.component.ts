import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  seeModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void{
    this.seeModal = this.seeModal ? false : true;
  }

  closeModal(value: boolean) : void{
    this.seeModal = value
  }
}
