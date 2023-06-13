import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../services/card-service.service';
import { Card } from '../modules/classes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public cards: Array<Card> = [];

  constructor(
    private cardService: CardServiceService
  ) { }

  ngOnInit(): void {
    this.cardService.getAllCards().subscribe((data : Array<Card>) => {
      this.cards = data;
      console.log(this.cards);
    })

    
  }

}
