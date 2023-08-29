import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/modules/classes';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  //form create
  // @ts-ignore
  public formCreate: FormGroup;
  public subscribeUser: Subscription;
  public error: boolean = false;

  constructor(
    private router: Router,
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
    this.error = false;
    let user = this.formCreate.value;
    user.cardsId = null;
    user.inscriptionDate = Date.now();
    user.lastCardDate = null;

    if(user.name == null || user.surname == null)
      this.error = true;
  
    if(user.name == '' || user.surname == '')
      this.error = true;

    this.router.navigate(['/']);
    this.subscribeUser = this.userService.insertUser(user).subscribe((data: any) => {
      console.log(data);
    })

    
  }
}
