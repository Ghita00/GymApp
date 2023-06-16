import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/modules/classes';
import { CardServiceService } from 'src/app/services/card-service.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  //datas
  public cardDetail: Card;

  //subscription to call server
  private subscribeExecise : Subscription;

  constructor(
    private cardService: CardServiceService
  ) {
    this.subscribeExecise = Subscription.EMPTY;
    this.cardDetail = {
      name: "", 
      desc: "", 
      pubDate: "", 
      modDate: "",
      color: "", 
      exercises: [],
    }
  }

  ngOnInit(): void {

    this.subscribeExecise = this.cardService.getExerciseOfCard("0001").subscribe((data : Card) => {
      this.cardDetail = data;
      console.log(this.cardDetail);
    })  
  }

  OnDestroy(): void {
    this.subscribeExecise.unsubscribe()
  }

}
