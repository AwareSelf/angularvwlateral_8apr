import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextchange]',
  standalone: true
})
export class TextchangeDirective {

  constructor(private ele:ElementRef,private renderer:Renderer2) { 

     console.log('textchange directive construtor');
     this.renderer.setProperty(this.ele.nativeElement,'value','Namrata');
    
  }


  @HostListener('click')
  onclick()
  {
    console.log('textchange directive click event handler called..');
    this.renderer.setProperty(this.ele.nativeElement,'value','Namrata Marathe');
  }

  
}
