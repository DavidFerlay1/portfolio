import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionRoutingModule } from './connection-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FieldComponent } from '../components/misc/field/field.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ConnectionRoutingModule,
    SharedModule
  ]
})
export class ConnectionModule { }
