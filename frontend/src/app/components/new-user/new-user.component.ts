import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/modules/classes';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  //form create
  // @ts-ignore
  public formCreate: FormGroup;

  public subscribeUser: Subscription

  constructor(
    private userService: UserServiceService
  ) {
    this.subscribeUser = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      image: new FormControl(),
      name: new FormControl(),
      surname: new FormControl(),
      description: new FormControl()
    })
  }

  OnDestroy(): void {
    this.subscribeUser.unsubscribe();
  }

  onSubmit(): void{
    console.log(this.formCreate.value);
    let user = this.formCreate.value;
    user.cardsId = null;
    user.inscriptionDate = Date.now();
    user.lastCardDate = null;

    this.subscribeUser = this.userService.insertUser(user).subscribe((data: any) => {
      console.log(data);
    })

  }
}
