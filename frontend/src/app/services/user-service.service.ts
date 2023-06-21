import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modules/classes';
import { BASE_URL } from './setupService';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient
  ) { }

  public insertUser(user : User) : any{
    this.http.post(BASE_URL+"/createUser", user)
    .subscribe((data : any) => {
      console.log(data);
    });
  }

  public getAllUser() : any{
    return this.http.get(BASE_URL+"/allUsers");
  }
 
  public getSingleUser(user: string) : any{
    return this.http.post(BASE_URL+"/filterUserByName", {'user': user});
  }
}
