import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { FieldComponent } from '../components/misc/field/field.component';


@NgModule({
  declarations: [
    AdminComponent,
    FieldComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
