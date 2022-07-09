import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss'],
  animations: [
    trigger('menuBurgerOpen', [
      state('close', style({})),

      state('topStep1', style({transform: "translateY(10px)"})),
      state('topStep2', style({transform: "translateY(10px) rotate(45deg)"})),

      state('centerStep1', style({opacity: "0"})),
      state('centerStep2', style({opacity: "0"})),

      state('bottomStep1', style({transform: "translateY(-10px)"})),
      state('bottomStep2', style({transform: "translateY(-10px) rotate(-45deg)"})),
    ])
  ]
})
export class BurgerButtonComponent implements OnInit, OnDestroy {

  open: boolean = false;

  private animationStepIndex = 0;
  private topBarAnimationTriggers = ['close', 'topStep1', 'topStep2'];
  private centerBarAnimationTriggers = ['close', 'centerStep1', 'centerStep2'];
  private bottomBarAnimationTriggers = ['close', 'bottomStep1', 'bottomStep2'];
  private animationStepDelay = 200;
  private animationTimeout?: ReturnType<typeof setTimeout>;

  private onToggleSubscription?: Subscription;

  @Output() onStateChange = new EventEmitter();

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.onToggleSubscription = this.navigationService.isNavMenuOpen.subscribe(value => value ? this.opens() : this.close())
  }

  ngOnDestroy(): void {
    this.onToggleSubscription?.unsubscribe();
  }

  toggle() {
      this.onStateChange.emit(!this.open);
  }

  private opens() {
    this.open = true;
    this.animationTimeout && clearTimeout(this.animationTimeout);
    this.animationStepIndex = 1
    this.toggleAnimation(true);
  }

  private close() {
    this.open = false;
    this.animationTimeout && clearTimeout(this.animationTimeout);
    this.animationStepIndex = 1;
    this.toggleAnimation(false);
  }

  get topAnimationStep(): string {
    return this.topBarAnimationTriggers[this.animationStepIndex];
  }

  get centerAnimationStep(): string {
    return this.centerBarAnimationTriggers[this.animationStepIndex];
  }

  get bottomAnimationStep(): string {
    return this.bottomBarAnimationTriggers[this.animationStepIndex];
  }

  private toggleAnimation(forward: boolean) {

    this.animationTimeout && clearTimeout(this.animationTimeout);

    if(forward) {
      this.animationTimeout = setTimeout(() => {
        this.animationStepIndex++;
      }, this.animationStepDelay)
    }
    else {
      this.animationTimeout = setTimeout(() => {
        this.animationStepIndex--;
      }, this.animationStepDelay)
    }
  }

}
