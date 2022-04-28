import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FieldComponent),
    }
  ]
})
export class FieldComponent implements ControlValueAccessor, Validator {

  @Input() label: string = "";
  @Input() spellcheck: boolean = false;
  @Input() type: string = "text";
  @Input() dataAos: string = "";
  @Input() dataAosOffset: string = "";
  @Input() dataAosDelay: string = "";
  @Input() multiline: boolean = false;

  constructor() { }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  validate(control: AbstractControl): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }

}
