import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "user/"

  constructor(private http: HttpClient) { }

  login(form: {username: string, password: string}) {
    
  }
}
