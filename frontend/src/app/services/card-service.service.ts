import { Injectable } from '@angular/core';
import { Card, User } from '../modules/classes';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './setupService';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllCards() : any{
    return this.http.get(BASE_URL+"/allCards");
  }

  public getSingleCards(card: string) : any{
    return this.http.get(BASE_URL+"/detailCard?card="+card);
  }

  public getExerciseOfCard(idCard : string) : any{
    return this.http.get(BASE_URL+"/detailCard?user=1111&card="+idCard);
  }
}
