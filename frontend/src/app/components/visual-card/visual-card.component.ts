import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/modules/classes';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-visual-card',
  templateUrl: './visual-card.component.html',
  styleUrls: ['./visual-card.component.css']
})
export class VisualCardComponent implements OnInit {
  //form search
  // @ts-ignore
  public formSearch: FormGroup

  //datas
  public users: Array<User> = [];

  //subscription to call server
  private subscribeUser: Subscription;
  private subscribeUserFilter: Subscription;

  constructor(
    private userService: UserServiceService
  ) {
    this.subscribeUser = Subscription.EMPTY;
    this.subscribeUserFilter = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.subscribeUser = this.userService.getAllUser().subscribe((data: Array<User>) => {
      this.users = data;
      console.log(this.users);
    })

    this.formSearch = new FormGroup({
      nameUser: new FormControl()
    })
  }

  OnDestroy(): void {
    this.subscribeUser.unsubscribe();
    this.subscribeUserFilter.unsubscribe()
  }

  onSubmit(): void {
    console.log(this.formSearch.value.nameUser)
    const name = this.formSearch.value.nameUser
    if(name == undefined){
      this.subscribeUser = this.userService.getAllUser().subscribe((data: Array<User>) => {
        this.users = data;
        console.log(this.users);
      })
    }else{
      this.subscribeUserFilter = this.userService.getSingleUser(name).subscribe((data: Array<User>) => {
        this.users = data;
        console.log(this.users);
      })
    }
    
    
  }

}
