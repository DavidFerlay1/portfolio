import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: '[animationAbstract]'
})
export abstract class AnimationAbstract {

  @Input() delay: number = 0;
  protected handler!: Function;
  protected ref!: ElementRef;

  abstract trigger(): void;

  get isOnScreen(){
    var pageTop = window.scrollY;
    var pageBottom = pageTop + window.innerHeight;
    var elementTop = this.ref.nativeElement.offsetTop;
    var elementBottom = elementTop + this.ref.nativeElement.offsetHeight;

    return ((elementTop <= pageBottom) && (elementBottom >= pageTop))
  }

  abstract get isHandled(): boolean;

}
