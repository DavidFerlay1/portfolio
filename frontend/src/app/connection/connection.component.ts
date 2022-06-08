import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  credentials = new FormGroup ({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  onLoginSubmit() {

  }

}
