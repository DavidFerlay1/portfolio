import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { AppDialogService } from 'src/app/services/app-dialog.service';
import { DateFormatService } from 'src/app/services/date-format.service';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() experience?: Experience;

  timeline: string = "";

  constructor(private dialogService: AppDialogService, public dateFormatService: DateFormatService) { }

  ngOnInit(): void {
    this.initTimeline();
  }

  viewDetail() {
    let dialogRef = this.dialogService.open(ExperienceDetailComponent, "Détail", {
      experience: this.experience
    });
  }

  initTimeline() {
    if(!this.experience?.beginDate)
      return;

    this.timeline = this.experience.endDate ? `De ${this.dateFormatService.getFormattedDate(this.experience.beginDate, false, false)}` :
        `Depuis ${this.dateFormatService.getFormattedDate(this.experience.beginDate, false, false)}`;

    if(this.experience.endDate)
      this.timeline += ` à ${this.dateFormatService.getFormattedDate(this.experience.endDate, false, false)}`;
  }

}
