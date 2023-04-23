import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() rate = 0;
  @Input() author = '';
  @Input() author_function = '';
  @Input() comment = '';

  rateArray: number[] = []
  emptyRate: number[] = [];

  @ViewChild('commentRef') commentRef!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.rateArray = Array(this.rate).fill(0);
    this.emptyRate = Array(5 - this.rateArray.length).fill(0);
  }

  toggleShown(enable: boolean) {
    if(enable)
      this.renderer.addClass(this.commentRef.nativeElement, 'shown');
    else
      this.renderer.removeClass(this.commentRef.nativeElement, 'shown');
  }
}
