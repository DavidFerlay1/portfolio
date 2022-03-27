import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostListener('window:scroll', []) onScroll() {
    this.isSticky = window.scrollY === 0;
    this.isVisible = this.lastScrollY >= window.scrollY;
    this.lastScrollY = window.scrollY;
  }

  constructor() { }

  isSticky: boolean = true;
  isVisible: boolean = true;

  private lastScrollY = window.scrollY;

  ngOnInit(): void {
  }

}
