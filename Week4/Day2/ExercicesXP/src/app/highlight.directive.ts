import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight!: number;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.appHighlight > 300) {
      this.el.nativeElement.style.backgroundColor = "yellow"
    }
  }

}
