import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardServiceService } from '../../services/card-service.service';
import { Card, User } from '../../modules/classes';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //datas
  public cards: Array<Card> = [];
  public userQueryParam : string = "";
  public user: User = {
    _id : "0000",
    name: "name",
    img: null,
    surname: "surname",
    description: "description",
    cardsId: []
  };

  //subscription to call server
  private subscribeCard : Subscription;
  private subscribeUser : Subscription;

  constructor(
    private cardService: CardServiceService,
    private route: ActivatedRoute,
    private userService: UserServiceService
  ) {
    this.subscribeCard = Subscription.EMPTY;
    this.subscribeUser = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log('params', params);
        this.userQueryParam = params["user"]
      }
    )

    this.subscribeUser = this.userService.getSingleUserById(this.userQueryParam).subscribe((data : User) => {
      this.user = data;
      console.log(this.user);
      if(this.user.cardsId){
        for(let cardIs of this.user.cardsId){
          this.subscribeCard = this.cardService.getSingleCards(cardIs).subscribe((data : Card) => {
            this.cards.push(data);
            console.log(cardIs, this.cards);
          })
        }
      }
    })
  }

  OnDestroy(): void {
    this.subscribeCard.unsubscribe();
    this.subscribeUser.unsubscribe();
  }
}
