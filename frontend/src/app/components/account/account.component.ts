import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employ, User } from 'src/app/modules/classes';
import { EmployService } from 'src/app/services/employ.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  //datas
  public employs: Array<Employ> = [];

  //subscription to call server
  private subscribeEmploys : Subscription;

  constructor(
    private employService: EmployService
  ) {
    this.subscribeEmploys = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.subscribeEmploys = this.employService.getAllEmploys().subscribe((data : Array<Employ>) => {
      this.employs = data;
      console.log(this.employs);
    })    
  }

  OnDestroy(): void {
    this.subscribeEmploys.unsubscribe()
  }

}
