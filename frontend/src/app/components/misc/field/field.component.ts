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
  @Input() value: string = "";
  @Input() ignorable: boolean = false;

  ignored: boolean = false;

  private onChange(value: any){};
  private onTouch(value: string){};

  valueChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
  }

  onIgnore(event: any) {
    this.ignored = !event.target.checked;
  }

  constructor() { }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  validate(control: AbstractControl): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }

}
