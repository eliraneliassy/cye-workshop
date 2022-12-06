import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  constructor(private httpClient: HttpClient) { }

  getBooks(term: string) {
    term = term.toLowerCase();
    let params: HttpParams = new HttpParams();
    params = params.append('q', term);

    return this.httpClient.get(this.BASE_URL, { params });
  }


}
