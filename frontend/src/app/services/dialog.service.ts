import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/dialogs/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  dialogRef?: MatDialogRef<any>;

  confirmDialog(data: any = null) {

    this.dialogRef = this.dialog.open(
      ConfirmComponent,
      {
        panelClass: ['dialogs-ref', 'confirm'],
        data
      }
    )
  }

  close() {
    this.dialogRef?.close();
  }
}
