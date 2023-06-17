import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/classes';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  constructor(
    private cardService: UserServiceService
  ) { 
  }

  ngOnInit(): void {
  }

  addUser(): void {

    let name: string | undefined = document.getElementById("first-name")?.innerHTML;
    let surname: string | undefined = document.getElementById("last-name")?.innerHTML;
    let img: string | undefined = document.getElementById("image")?.innerHTML;
    let description: string | undefined = document.getElementById("message")?.innerHTML;

    //todo learn how to use form in angular

    let user : User = {
      id : "1002",
      name: "name",
      img: null,
      surname: "surname",
      description: "description",
      cardsId: []
    }

    this.cardService.insertUser(user)

  }
}
