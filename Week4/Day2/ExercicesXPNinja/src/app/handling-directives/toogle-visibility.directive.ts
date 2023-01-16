import { Directive, ElementRef ,Renderer2} from '@angular/core';
@Directive({
  selector: '[appToogleVisibility]'
})
export class ToogleVisibilityDirective {

  constructor(private el: ElementRef,private renderer:Renderer2) {
     this.Display('none')
   }
   Display(property:string){
    this.renderer.setStyle(this.el.nativeElement,'display',property)
   }
}
