import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  Booklist1Component } from './booklist1/booklist1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,Booklist1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title:string;

  mybook:{bkid:number,bkname:string,bkprice:number};
  lstsz?:number;

  constructor()
  {
    console.log('constructor of app component called...');
    this.title = 'my sample app';
    this.mybook = {bkid:2,bkname:'angular',bkprice:4000}
  }

  /*
  chngtitle(ip1:HTMLInputElement):void
  {
  
    console.log(ip1.type);
    console.log(ip1.value);
    this.title = ip1.value;
  }
  */

  setbklistsize(lstsz:number):void
  {
    console.log('setbklistsz function called..'+lstsz);
    this.lstsz = lstsz;
  }

  chngtitle(newtitle:string):void
  {
    console.log(newtitle);
    this.title = newtitle;
  }

  chngtitle1():void
  {
    console.log(this.title);
    this.mybook.bkname = this.title;
  }
}
