import { map } from 'rxjs/operators';
import { BooksService } from './books.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Book } from './book.interface';


@Component({
  selector: 'cye-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {

  // posts$?: Observable<any[]>;
  books$: Observable<Book[]> = this.booksService.getBooks('Angular');
  constructor(
    // private httpClient: HttpClient, 
    // private cdr: ChangeDetectorRef
    private booksService: BooksService
    ) {
    // this.getPost();
    
  }

  // getPost() {
  //   this.posts$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts')
    
  // }

  
}
