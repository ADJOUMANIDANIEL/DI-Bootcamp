import { Directive, ElementRef, HostListener,Renderer2 } from '@angular/core'

@Directive({
  selector: '[appAddCustomEvent]'
})
export class AddCustomEventDirective {

constructor(private elementRef: ElementRef,private render:Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.color = 'green';
  }

  


  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.color = 'blue';
  }
}