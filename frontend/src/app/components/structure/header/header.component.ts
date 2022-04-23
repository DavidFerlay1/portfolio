import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSticky: boolean = true;
  isVisible: boolean = true;

  @HostListener('window:scroll', []) onScroll() {
    this.isSticky = window.scrollY === 0;
    this.isVisible = this.lastScrollY >= window.scrollY;
    this.lastScrollY = window.scrollY;
  }

  constructor(public navigationService: NavigationService) { }

  navLinks = [
    {
      icon: 'fas fa-id-card',
      label: 'À propos',
      anchor: 'review'
    },
    {
      icon: 'fas fa-briefcase',
      label: 'Expérience',
      anchor: 'experiences'
    },
    {
      icon: 'fas fa-laptop-code',
      label: 'Projets',
      anchor: 'projects'
    },
    {
      icon: 'far fa-envelope',
      label: 'Contact',
      anchor: 'contact'
    },
  ]

  private lastScrollY = window.scrollY;

  ngOnInit(): void {
  }

}
