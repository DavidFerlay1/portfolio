import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(public _router: Router){}

  onActivate(){
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    AOS.init();
  }
}
