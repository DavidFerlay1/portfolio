import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-fade-in-item',
  templateUrl: './fade-in-item.component.html',
  styleUrls: ['./fade-in-item.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      state('closed', style({
        opacity: 0,
        transform: "translateY(20%)"
      })),
      transition('open => closed', [
        animate('.3s cubic-bezier(.54,-0.09,.03,.83)')
      ]),
      transition('closed => open', [
        animate('0.3s cubic-bezier(.54,-0.09,.03,.83)')
      ]),
    ]),
  ]
})
export class FadeInItemComponent {

  delay: number = 0;
  triggered: boolean = false;

  constructor() {}

  trigger(){
    setTimeout(() => this.triggered = true, this.delay);
  }

  setDelay(delay: number){
    this.delay = delay;
  }

}
