import { Component, DoCheck, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() title: string = '';
  @Input() percent: number = 0;
  @Input() class: string = '';
  interval: any = undefined;

  constructor() { }

  ngOnInit(): void {

    const percent = this.percent;
    this.percent = 0;

    setTimeout(() => {
      this.interval = setInterval(() => {

        this.percent++;

        if(this.percent === percent)
          clearInterval(this.interval);

      }, 10)
    }, 1000)

  }

}
