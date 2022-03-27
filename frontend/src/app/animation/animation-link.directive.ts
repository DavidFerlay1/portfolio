import { AfterViewInit, Directive, ElementRef, forwardRef, Input, Renderer2 } from '@angular/core';
import { AnimationService } from './animation.service';
import { AnimationAbstract } from './animationAbstract';

@Directive({
  selector: '[animationLink]',
  providers: [{provide: AnimationAbstract, useExisting: forwardRef(() => AnimationLinkDirective)}]
})
export class AnimationLinkDirective extends AnimationAbstract {

  triggeredClass: string = "triggered";
  private triggered: boolean = false;

  constructor(protected ref: ElementRef, private renderer: Renderer2) {
    super();
  }

  trigger(){
    this.triggered = true;

    setTimeout(() => {
      this.renderer.addClass(this.ref.nativeElement, this.triggeredClass);
    }, this.delay);

  }
  get isHandled(): boolean {
    return !this.triggered;
  }

}
