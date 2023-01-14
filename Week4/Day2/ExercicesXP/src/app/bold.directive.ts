import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.fontWeight = "bold";
  }

}
