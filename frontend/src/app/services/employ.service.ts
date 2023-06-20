import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './setupService';

@Injectable({
  providedIn: 'root'
})
export class EmployService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllEmploys() : any{
    return this.http.get(BASE_URL+"/allEmploys");
  }
}
