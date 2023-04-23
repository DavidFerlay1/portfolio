import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private authService: AuthService, private router: Router) { }

  login() {

    this.authService.login(this.formGroup.value).pipe(
      map((response: any) => {
        if(response) {
          localStorage.setItem('jwt', JSON.stringify(response.token));
          this.router.navigateByUrl('admin')
        }
      })
    ).subscribe();
  }

}
