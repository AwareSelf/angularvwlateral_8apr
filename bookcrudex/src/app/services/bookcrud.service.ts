import { Injectable } from '@angular/core';
import { Book } from '../model/book';


@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class BookcrudService {

  bookarr:Book[];

  constructor() { 
    this.bookarr = [];
  }

  addBook(b:Book):void
  {
       console.log('the book array size before addbook:'+this.bookarr.length);
       this.bookarr.push(b);
       console.log('the book array size after addbook:'+this.bookarr.length);

      
       //http backend call - post book to backebd rest service
  }

  getAllBooks():Book[]
  {
    return this.bookarr.slice();
  }

  deleteBook(b:Book)
  {
    let index = this.bookarr.findIndex(bk=>bk.bkid==b.bkid)

    this.bookarr.splice(index,1);
  
    //below two lines are for debugging purpose
    console.log('after delete book with bkid:'+b.bkid+' from the book array...');
    this.bookarr.forEach(b=>console.log(b.bkname));

  }

  // book bkid=1,angular,5000  updatebook(b:bkid:1,angular,7000)
  updateBook(b:Book):void
  {
    let index = this.bookarr.findIndex(bk=>bk.bkid==b.bkid);

    this.bookarr[index] = b;

    //below two lines are for debugging purpose
    console.log('book details to be updated:'+b.bkname+","+b.bkprice);
    console.log('after updating the book:'+this.bookarr[index].bkname+","+this.bookarr[index].bkprice);
  }
}
