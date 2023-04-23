import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FileService } from 'src/app/services/file.service';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private openNavbarSubscription?: Subscription;
  isNavbarOpen = false;

  @HostListener('window:scroll', []) onScroll() {
    this.navigationService.isHeaderSticky = window.scrollY === 0;
    this.navigationService.isHeaderVisible = this.lastScrollY >= window.scrollY;
    this.lastScrollY = window.scrollY;
    this.navigationService.markCurrentAnchor(window.scrollY);
  }

  @HostListener('window:resize', []) onResize() {
    if(this.isNavbarOpen && window.innerWidth <= 800) {
      this.navigationService.isNavMenuOpen.next(false)
    }
  }

  constructor(public navigationService: NavigationService, private renderer: Renderer2, public authService: AuthService, public fileService: FileService) { }

  ngOnInit(): void {
    this.openNavbarSubscription = this.navigationService.isNavMenuOpen.subscribe(value => {
      this.isNavbarOpen = value;
      if(value)
        this.renderer.addClass(document.body, 'navOpen');
      else
        this.renderer.removeClass(document.body, 'navOpen');
    })
  }

  ngOnDestroy(): void {
    this.openNavbarSubscription?.unsubscribe();
  }

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

  onLogoClick() {
    if(!this.navigationService.isPageAdmin)
      this.navigationService.scrollTo("begin")
    else
      this.navigationService.redirect("/");
  }

  onBurgerButtonStateChange(state: boolean) {
    this.navigationService.isNavMenuOpen.next(state);
  }

  onInvisibleHeaderBurgerButtonStateChange(state: boolean) {
    this.navigationService.isNavMenuOpen.next(state);
  }

  onNavlinkClick() {
    this.navigationService.isNavMenuOpen.next(false);
  }

}
