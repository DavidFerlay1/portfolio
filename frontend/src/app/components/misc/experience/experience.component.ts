import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() title: string = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewDetail() {
    let dialogRef = this.dialog.open(ExperienceDetailComponent, {
      panelClass: 'dialogs-ref'
    });
  }

}
