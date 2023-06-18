import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modules/classes';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  BASE_URL : string = "http://localhost:8000";

  constructor(
    private http: HttpClient
  ) { }

  public insertUser(user : User) : any{
    this.http.post(this.BASE_URL+"/createUser", user)
    .subscribe((data : any) => {
      console.log(data);
    });
  }

  public getAllUser() : any{
    return this.http.get(this.BASE_URL+"/allUsers");
  }
 
  public getSingleUser(user: string) : any{
    return this.http.get(this.BASE_URL+"/singleUser?user="+user);
  }
}
