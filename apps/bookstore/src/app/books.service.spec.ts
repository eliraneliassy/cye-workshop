import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

describe('BooksService', () => {
  let service: BooksService;
  let httpClient: HttpClient;

  const httpClientMock = {
    get: () => { return; }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useValue: httpClientMock }
      ]
    });
    service = TestBed.inject(BooksService);
    httpClient = TestBed.inject(HttpClient);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get books from http', () => {

    jest.spyOn(httpClient, 'get');

    service.getBooks('Angular');

    expect(httpClient.get).toHaveBeenCalledTimes(1);


  })


});
