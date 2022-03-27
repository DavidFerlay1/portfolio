import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  // @HostListener('window.onbeforeunload', []) onReload() {
  //   window.scrollTo(0,0);
  // }
}
