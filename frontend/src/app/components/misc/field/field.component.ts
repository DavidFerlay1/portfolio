import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() label: string = "";
  @Input() spellcheck: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}