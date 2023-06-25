import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './setupService';
import { CredentialEmploy } from '../modules/classes';

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

  public loginEmploy(credential: CredentialEmploy) : any {
    return this.http.post(BASE_URL+"/login", credential)
  }
}
