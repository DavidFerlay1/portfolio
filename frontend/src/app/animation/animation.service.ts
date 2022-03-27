import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { AnimationAbstract } from './animationAbstract';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  private animated = Array<AnimationAbstract>();
  private renderer: Renderer2;
  private handler: Function;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.handler = () => this.renderer.listen(window, 'scroll', () => {
      this.animated.forEach(child => {
        if(child.isOnScreen)
          child.trigger();
      })
      this.refresh();
      console.log("CHILDREN")
    })
  }

  addItem(target: AnimationAbstract){
    this.animated.push(target);
  }

  refresh(){
    for(var i = this.animated.length - 1; i >= 0;  i--){
      this.animated[i].isHandled || this.animated.splice(i ,1);
    }

    if(!this.animated.length)
      this.handler();
  }
}
