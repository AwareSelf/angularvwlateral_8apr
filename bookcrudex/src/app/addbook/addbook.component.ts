import { Component } from '@angular/core';
import { Book } from '../model/book';
import { FormsModule } from '@angular/forms';
import { BookcrudService } from '../services/bookcrud.service';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css',
 
})
export class AddbookComponent {

  book:Book;
  statusmsg:string;

 
 //bookser of type BookCrudService is a dependancy of AddbookComponent
 //you just mention the dependancy in the constructor, and angular will inject it on your behalf
 //while injecting instance of that dependancy it will also ensure that singleton instance is injected
 //if it shares the same scope of service
 constructor(private bookser:BookcrudService)
  {
       this.book = new Book();
       this.statusmsg='';
  }

  addBook():void
  {
     console.log('final new book details:'+this.book.bkid+","+this.book.bkname+","+this.book.bkprice);

     //call bookservice.addbook(book)
     //can validate this.book here before calling addbook on bookservice

     if(this.book.bkid>=0 && this.book.bkname!='')
      {
          this.bookser.addBook(this.book);
          this.statusmsg =   'book:'+ 
                        'bookid:'+this.book.bkid +","
                       +"book name:"+this.book.bkname
                      +",book price:"+this.book.bkprice
                      " added successfully!";

          //create a new book and bind it to UI
          this.book = new Book();
      }
      else
      {
        this.statusmsg = 'book to be added cannot have 0 or negative book id as :'+this.book.bkid+' or book name as blank!';
      }

  }

}
