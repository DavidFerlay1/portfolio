import { Component, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ItemListComponent),
    multi: true
  }
  ]
})
export class ItemListComponent implements ControlValueAccessor{

  @Output() onSelect = new EventEmitter();
  @Input() disabled: boolean = false;

  @Input() title: string = "";
  @Input() emptyMessage: string = "Aucun objet";

  @Input() items: any[] = [];
  @Input() itemLabel: string = "";
  @Input() sortBy: string = "";
  selectedItem: any = undefined;

  selectedIndex = -1;

  onChange = (item: any) => {};
  onTouched = () => {};

  constructor() { }
  writeValue(item: any): void {
    this.selectedItem = item;
    this.onChange(item);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  selectItemAtIndex(index: number) {

    if(index === this.selectedIndex) {
      this.selectedIndex = -1;
      this.writeValue(null);
    } else {
      this.selectedIndex = index;
      this.writeValue(this.items[index])
    }

    this.onSelect.emit(this.selectedItem);
  }

  selectItem(item: any, update = true) {
    const index = this.items.indexOf(item);
    this.selectedIndex = index;
    this.writeValue(item);
  }

  avoidSelection() {
    this.selectItemAtIndex(this.selectedIndex);
  }

}
