import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from '../components/misc/field/field.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FieldComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FieldComponent, ReactiveFormsModule
  ]
})
export class SharedModule { }
