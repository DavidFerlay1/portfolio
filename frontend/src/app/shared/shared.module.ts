import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from '../components/misc/field/field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from 'src/app/components/misc/item-list/item-list.component';
import { EditorModule } from 'primeng/editor';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    FieldComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FieldComponent,
    ItemListComponent,
    ReactiveFormsModule,
    FormsModule,
    EditorModule,
    DynamicDialogModule,
  ],
  providers: [
    DialogService
  ]
})
export class SharedModule { }
