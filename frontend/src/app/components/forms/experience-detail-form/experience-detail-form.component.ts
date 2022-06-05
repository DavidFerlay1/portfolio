import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-experience-detail-form',
  templateUrl: './experience-detail-form.component.html',
  styleUrls: ['./experience-detail-form.component.scss']
})
export class ExperienceDetailFormComponent {

  detail?: string;
  onValidate: Function;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef) {
    this.detail = this.config.data.detail;
    this.onValidate = this.config.data.onValidate;
  }

  onValidateClick() {
    this.onValidate(this.detail);
    this.ref.close();
  }

}
