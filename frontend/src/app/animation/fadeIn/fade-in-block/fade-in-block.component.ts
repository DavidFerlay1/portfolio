import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FadeInItemComponent } from '../fade-in-item/fade-in-item.component';

@Component({
  selector: 'app-fade-in-block',
  templateUrl: './fade-in-block.component.html',
  styleUrls: ['./fade-in-block.component.scss']
})
export class FadeInBlockComponent implements AfterContentInit {

  @ContentChildren(FadeInItemComponent) children?: QueryList<FadeInItemComponent>

  @Input() animationDelay: number = 0;
  @Input() triggerDelay: number = 0;
  @Input() translateY: string = "0";
  @Input() animationDurationPerChild: string = "0.3s";

  constructor() { }

  ngAfterContentInit(): void {
    this.children?.forEach((child, index) => {
      child.delay = this.animationDelay * index;
      child.translateY = this.translateY;
      child.animationDuration = this.animationDurationPerChild;
    })
    setTimeout(() => this.children?.forEach(child => child.trigger()), this.triggerDelay)

  }

}
