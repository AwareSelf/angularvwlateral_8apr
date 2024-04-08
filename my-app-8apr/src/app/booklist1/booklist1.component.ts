import { Component,Input, OnChanges, OnInit, OnDestroy,SimpleChanges } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-booklist1',
  standalone: true,
  imports: [],
  templateUrl: './booklist1.component.html',
  styleUrl: './booklist1.component.css'
})
export class Booklist1Component implements OnInit,OnChanges,OnDestroy {
  @Input() bkid:number|undefined;
  @Input() bkname:string|undefined;
  @Input() bkprice:number|undefined;

  bookarr:Book[]|undefined;


  constructor()
  {
    this.bkprice = 2000;
    this.bookarr = [];
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

    this.bookarr?.push(new Book());
    console.log(this.bookarr?.length);

  }

  
}
