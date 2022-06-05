import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateFormatService } from 'src/app/services/date-format.service';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() title: string = "";
  @Input() company: string = "";
  @Input() beginDate?: string = undefined;
  @Input() endDate?: string = undefined;
  @Input() post: string = "";
  timeline: string = "";

  constructor(public dialog: MatDialog, public dateFormatService: DateFormatService) { }

  ngOnInit(): void {
    this.initTimeline();
  }

  viewDetail() {
    let dialogRef = this.dialog.open(ExperienceDetailComponent, {
      panelClass: 'dialogs-ref'
    });
  }

  initTimeline() {
    if(!this.beginDate)
      return;

    this.timeline = this.endDate ? `De ${this.dateFormatService.getFormattedDate(this.beginDate, false, false)}` :
        `Depuis ${this.dateFormatService.getFormattedDate(this.beginDate, false, false)}`;

    if(this.endDate)
      this.timeline += ` à ${this.dateFormatService.getFormattedDate(this.endDate, false, false)}`;
  }

}
