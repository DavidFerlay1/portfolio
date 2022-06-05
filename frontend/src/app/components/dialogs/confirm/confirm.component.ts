import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AppDialogService } from 'src/app/services/app-dialog.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  title: string;
  icon: string;
  message: string;
  disableYes: boolean;
  yesText: string = "Oui";
  timerInterval: any;

  afterYes(){};

  constructor(public dialogService: AppDialogService, private config: DynamicDialogConfig) {

    const data = this.config.data;

    this.title = data.title || "Attention";
    this.icon = data.icon || "fas fa-warning";
    this.message = data.message || "";
    this.disableYes = data.disableYes || false;
    if(data.afterYes)
      this.afterYes = data.afterYes;

    if(this.disableYes)
      this.warningDelay();
  }

  warningDelay() {
    let count = 3;
    this.yesText = String(count);

    this.timerInterval = setInterval(() => {

      count--;

      if(count === 0) {
        clearInterval(this.timerInterval);
        this.disableYes = false;
        this.yesText = "Oui";
      } else {
        this.yesText = String(count);
      }


    }, 1000)

  }

}
