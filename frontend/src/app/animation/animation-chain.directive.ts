import { AfterContentInit, AfterViewInit, ContentChildren, Directive, ElementRef, forwardRef, Input, QueryList, Renderer2 } from '@angular/core';
import { AnimationLinkDirective } from './animation-link.directive';
import { AnimationService } from './animation.service';
import { AnimationAbstract } from './animationAbstract';

@Directive({
  selector: '[animationChain]',
  providers: [{provide: AnimationAbstract, useExisting: forwardRef(() => AnimatedChainDirective)}]
})
export class AnimatedChainDirective extends AnimationAbstract implements AfterContentInit, AfterViewInit {

  @ContentChildren(AnimationAbstract) children?: QueryList<AnimationAbstract>

  @Input() childrenTriggeredClassName: string = "triggered";
  @Input() chainDelay: number = 0;
  private triggered: boolean = false;
  processing: boolean = false;

  constructor(protected ref: ElementRef, private renderer: Renderer2, private service: AnimationService) {
    super();
    this.handler = this.renderer.listen(window, 'scroll', () => {
      if(this.isOnScreen && !this.processing)
        this.trigger()
    })

    this.service.addItem(this);
  }

  trigger(){
    this.triggered = true;
    this.processing = true;

    setTimeout(() => {
      this.children?.forEach(child => {
        if(child.isOnScreen)
          child.trigger();
        else
          child.delay = 0;
      })

      this.initChain();
      if(this.children?.filter(child => child.isHandled)?.length === 0)
        this.handler();

      this.processing = false;

    }, this.delay)

  }

  ngAfterContentInit(): void {
    this.initChain();
    this.children?.forEach(child => {
      if(child instanceof AnimationLinkDirective)
        child.triggeredClass = this.childrenTriggeredClassName;
      if(child.isOnScreen)
        child.trigger();
    })
    //this.children?.forEach(child => this.service.addItem(child));
  }

  ngAfterViewInit(): void {
    if(this.isOnScreen)
      this.trigger();
  }

  get isHandled(): boolean {
    return !this.triggered;
  }

  private initChain(){
    var totalDelay = this.delay;
    this.children?.filter(child => child.isHandled).forEach(child => {
      child.delay = totalDelay;
      totalDelay += this.chainDelay;
    })
  }

}
