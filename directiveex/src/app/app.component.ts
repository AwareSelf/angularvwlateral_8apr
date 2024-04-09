import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { TextchangeDirective } from './directives/Textchange.directive';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HighlightDirective,TextchangeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {

  newcolor:string;

  constructor()
  {
    this.newcolor = 'cyan';
  }


 
}
