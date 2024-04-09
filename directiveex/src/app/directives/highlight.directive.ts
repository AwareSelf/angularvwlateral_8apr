import { Directive, ElementRef, Host, HostListener, Renderer2,Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  @Input() startcolor:string;
  @Input() changecolor:string;

  constructor(private ele:ElementRef,private renderer:Renderer2) { 

    this.startcolor = 'pink';
    this.changecolor = 'blue';
   
  }

  ngOnInit(): void {
   // this.ele.nativeElement.style.backgroundColor = 'yellow';
   this.renderer.setStyle(this.ele.nativeElement,'background-color',this.startcolor);
  }




  @HostListener('click')
  onclick()
  {
    this.ele.nativeElement.style.backgroundColor = this.changecolor;
   // this.renderer.setProperty(this.ele.nativeElement,'innerHTML','i am fine!');
    
    
  }

  @HostListener('mouseover')
  onmouseover()
  {
    console.log('on mouse over fired...');
    this.renderer.setProperty(this.ele.nativeElement,'innerHTML','i am fine!');
    
  }

}
