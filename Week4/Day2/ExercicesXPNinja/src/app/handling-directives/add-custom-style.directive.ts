import { Directive, ElementRef ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appAddCustomStyle]'
})
export class AddCustomStyleDirective {

  constructor(private el: ElementRef,private renderer:Renderer2) {
    this.Color('red')
  }
  Color(color:string){
   this.renderer.setStyle(this.el.nativeElement,'color',color)
  }
}
