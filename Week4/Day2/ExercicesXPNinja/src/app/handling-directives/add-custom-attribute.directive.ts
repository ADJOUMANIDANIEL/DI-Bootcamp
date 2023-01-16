import { Directive, ElementRef ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appAddCustomAttribute]'
})
export class AddCustomAttributeDirective {

  constructor(private el: ElementRef,private renderer:Renderer2) {
    this.Cursor('pointer')
  }
  Cursor(hand:string){
   this.renderer.setStyle(this.el.nativeElement,'cursor',hand)
  }

}
