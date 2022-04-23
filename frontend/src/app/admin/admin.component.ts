import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  skillFormGroup = new FormGroup({
    label: new FormControl(''),
    level: new FormControl(0)
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSkillFormSubmit(){console.log('submit')}

}
