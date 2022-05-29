import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  private closeText: string = "Ok";
  private duration: number = 3000;

  success(message: string) {
    this.displayToast(message, "success");
  }

  danger(message: string) {
    this.displayToast(message, "danger")
  }

  info(message: string) {
    this.displayToast(message, "info");
  }

  private displayToast(message: string, className: string){
    let snackBarRef = this.snackBar.open(message, undefined, {
      panelClass: className,
      duration: this.duration,
      verticalPosition: "top",
      horizontalPosition: "center"
    })
  }
}
