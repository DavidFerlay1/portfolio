import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: {username: string, password: string}) {
    return this.http.post('login_check', credentials);
  }

  logout() {
    localStorage.removeItem('jwt');
    window.location.reload();
  }

  get authenticated() {
    return localStorage.getItem('jwt') !== null;
  }
}
