import { Injectable } from '@angular/core';
import { Card } from '../modules/classes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  BASE_URL : string = "http://localhost:8000";

  constructor(
    private http: HttpClient
  ) { }

  public getAllCards() : any{
    return this.http.get(this.BASE_URL+"/allCards");
  }
}
