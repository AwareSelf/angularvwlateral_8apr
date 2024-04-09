import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { ListbookComponent } from './listbook/listbook.component';
import { BookcrudService } from './services/bookcrud.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AddbookComponent,ListbookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 // providers:[BookcrudService]
})
export class AppComponent {


 
}
