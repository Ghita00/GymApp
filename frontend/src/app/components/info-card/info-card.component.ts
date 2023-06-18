import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public userQueryParam : string = "";

  //subscription to call server
  private subscribeExecise : Subscription;

  constructor(
    private cardService: CardServiceService,
    private route: ActivatedRoute,
  ) {
    this.subscribeExecise = Subscription.EMPTY;
    this.cardDetail = {
      id: "",
      name: "", 
      desc: "", 
      pubDate: "", 
      modDate: "",
      color: "", 
      exercises: [],
    }
  }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.userQueryParam = params["card"]
      }
    )

    this.subscribeExecise = this.cardService.getExerciseOfCard(this.userQueryParam).subscribe((data : Card) => {
      this.cardDetail = data;
      console.log(this.cardDetail);
    })  
  }

  OnDestroy(): void {
    this.subscribeExecise.unsubscribe()
  }

}
