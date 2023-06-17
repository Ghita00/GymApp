import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/modules/classes';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-visual-card',
  templateUrl: './visual-card.component.html',
  styleUrls: ['./visual-card.component.css']
})
export class VisualCardComponent implements OnInit {
  //datas
  public users: Array<User> = [];

  //subscription to call server
  private subscribeUser : Subscription;

  constructor(
    private userService: UserServiceService
  ) {
    this.subscribeUser = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.subscribeUser = this.userService.getAllUser().subscribe((data : Array<User>) => {
      this.users = data;
      console.log(this.users);
    })    
  }

  OnDestroy(): void {
    this.subscribeUser.unsubscribe()
  }

}
