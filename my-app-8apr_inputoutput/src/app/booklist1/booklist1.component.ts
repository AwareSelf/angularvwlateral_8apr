import { Component,Input, Output,OnChanges, OnInit, OnDestroy,SimpleChanges, EventEmitter } from '@angular/core';
import { Book } from '../model/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booklist1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booklist1.component.html',
  styleUrl: './booklist1.component.css'
})
export class Booklist1Component implements OnInit,OnChanges,OnDestroy {
  @Input() bkid:number|undefined;
  @Input() bkname:string|undefined;
  @Input() bkprice:number|undefined;

  mybook:Book;
  bookarr:Book[]|undefined;

  //step1:
  @Output() booklen_evt:EventEmitter<number>;


  constructor()
  {
    this.bkprice = 2000;
    this.bookarr = [];

    this.mybook = new Book();
    console.log(this.mybook);
    //step2:
    this.booklen_evt = new EventEmitter<number>();
    console.log('constructor BookList1Component called..'+this.bkprice);
   
  }

 
  ngOnDestroy(): void {
    console.log('BookList component about to be destroyed..');
  }
  ngOnChanges(changes: SimpleChanges): void {
     console.log('OnChanges called...'+this.bkprice);
  }
  ngOnInit(): void {
    console.log('OnInit called...'+this.bkprice)
    let b = new Book(this.bkid,this.bkname,this.bkprice);
    this.bookarr?.push(b);
    console.log(this.bookarr?.length);

   }

  addbook():void
  {
    if(this.mybook)
    {
      this.bookarr?.push(this.mybook);
      this.mybook = new Book();

      //step3
      this.booklen_evt?.emit(this.bookarr?.length);
    }
    
  }

  
}
