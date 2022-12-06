import { Book } from './../book.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cye-workshop-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {

  @Input() book?: Book;
  @Output() addToCart = new EventEmitter<Book>();

  onAddToCart(){
    this.addToCart.emit(this.book);
  }

}
