import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmComponent } from '../components/dialogs/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class AppDialogService {

  constructor(private dialog: DialogService) { }

  dialogRef?: DynamicDialogRef;

  confirmDialog(data: any = null) {

    this.dialogRef = this.dialog.open(
      ConfirmComponent,
      {
        data,
        header: "Attention",
        footer: " "
      }
    )
  }

  close() {
    this.dialogRef?.close();
  }

  open(componentType: ComponentType<any>, title: string, data: any = null, modal = true) {
    return this.dialog.open(componentType, {
      data,
      footer: " ",
      header: title,
    })
  }
}
