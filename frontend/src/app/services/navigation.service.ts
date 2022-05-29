import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private anchorsHtmlElements: HTMLElement[] = [];
  private offset: number = 25;

  constructor(private route: Router) {}

  scrollTo(id: string){
    const element = document.getElementById(id);
    element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  setAnchors(anchorsHtmlElements: HTMLElement[]): void {
    this.anchorsHtmlElements = anchorsHtmlElements;
  }

  get isPageAdmin() {
    return this.route.url === "/admin"
  }

  redirect(url: string) {
    this.route.navigate([url]);
  }

  scrollToPreviousAnchor() {
    const position = window.scrollY;

    let previousAnchor = this.anchorsHtmlElements[0];

    this.anchorsHtmlElements.forEach(anchor => {
      if(anchor.offsetTop + this.offset < position){
        previousAnchor = anchor;
      }
    })

    this.scrollTo(previousAnchor.id);
  }

  scrollToNextAnchor() {
    const position = window.scrollY;

    let previousAnchor = this.anchorsHtmlElements[this.anchorsHtmlElements.length - 1];

    for(var i = this.anchorsHtmlElements.length - 1; i >= 0; i-- ){
      if(this.anchorsHtmlElements[i].offsetTop + this.offset > position)
        previousAnchor = this.anchorsHtmlElements[i];
    }

    this.scrollTo(previousAnchor.id);
  }

  getElementAtIndex(index: number): HTMLElement {
    return this.anchorsHtmlElements[index];
  }

}
