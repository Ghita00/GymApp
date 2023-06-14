import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardServiceService } from '../../services/card-service.service';
import { Card } from '../../modules/classes';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //datas
  public cards: Array<Card> = [];

  //subscription to call server
  private subscribeCard : Subscription;

  constructor(
    private cardService: CardServiceService
  ) {
    this.subscribeCard = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.subscribeCard = this.cardService.getAllCards().subscribe((data : Array<Card>) => {
      this.cards = data;
      console.log(this.cards);
    })    
  }

  OnDestroy(): void {
    this.subscribeCard.unsubscribe()
  }
}
