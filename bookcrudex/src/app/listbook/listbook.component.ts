import { Component } from '@angular/core';
import { BookcrudService } from '../services/bookcrud.service';
import { Book } from '../model/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css',

})
export class ListbookComponent {

   bookarr:Book[];
   is_edit:boolean;
   book:Book;


  constructor(private bookser:BookcrudService)
  {
     this.bookarr = this.bookser.getAllBooks();
     this.is_edit = false;
     this.book = new Book();
  }

  listbooks():void
 {
     this.bookarr = this.bookser.getAllBooks();
 }

 delbook(b:Book):void
 {
    this.bookser.deleteBook(b);
    this.bookarr = this.bookser.getAllBooks();
 }

 editbook(b:Book):void
 {
   this.book = new Book(b.bkid,b.bkname,b.bkprice); 
   this.is_edit = true;
    

 }

 updatebook(b:Book):void
 {
  console.log('updated book details:bkid:'+b.bkid+
                                    'bkname:'+b.bkname+
                                    'bkprice:'+b.bkprice);
                          
      this.bookser.updateBook(b);
      this.bookarr = this.bookser.getAllBooks(); 
      this.is_edit = false;                             
  
 }
}
