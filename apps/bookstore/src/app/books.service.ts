import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  constructor(private httpClient: HttpClient) { }

  getBooks(term: string): Observable<Book[]> {
    term = term.toLowerCase();
    let params: HttpParams = new HttpParams();
    params = params.append('q', term);

    return this.httpClient.get<any[]>(this.BASE_URL, { params })
      .pipe(
        map((res: any) => res.items),
        map((items: any[]) => items.map((item: any) => ({
          title: item.volumeInfo.title,
          previewImgUrl: item.volumeInfo.imageLinks.thumbnail,
          price: item.volumeInfo.pageCount
        })))
      );
  }


}
