import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})
export class ExperienceDetailComponent {

  experience: Experience;

  constructor(private config: DynamicDialogConfig) {
    this.experience = this.config.data.experience;
  }

}
