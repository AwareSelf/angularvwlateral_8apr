import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  
  @Input() bkname:string|undefined;



}
