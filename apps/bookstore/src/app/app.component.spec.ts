import { flush, flushMicrotasks, tick, waitForAsync } from '@angular/core/testing';
import { fakeAsync } from '@angular/core/testing';
import { delay, Observable } from 'rxjs';
import { BookComponent } from './book/book.component';
import { By } from '@angular/platform-browser';
import { BooksService } from './books.service';
import { BOOKS_MOCK } from './../books.mock';
import { of } from 'rxjs';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponent } from 'ng-mocks';
import { DebugElement } from '@angular/core';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const booksServiceMock: BooksService = {
    getBooks: () => {
      // return of(BOOKS_MOCK).pipe(
      //   delay(0)
      // )

      return new Observable(observer => {
        setTimeout(() => {
          observer.next(BOOKS_MOCK);
          observer.complete();
        }, 0)
      })
    }

  } as any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        BookComponent
        // MockComponent(BookComponent)

      ],
      providers: [
        { provide: BooksService, useValue: booksServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
     // fixture.detectChanges();
  });

  it('should create the app', () => {

    expect(component).toBeTruthy();
  });

  it('should render books - fakeAsync', fakeAsync(() => {
    
    fixture.detectChanges();

    tick(1001);
    // flush();


    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('.book'));

    expect(items.length).toBe(2);

    const firstItem: DebugElement = items[0];
    expect(firstItem.componentInstance.book).toEqual(BOOKS_MOCK[0]);
  }))

  it('should render books - waitForAsync', waitForAsync(async() => {
    
    fixture.detectChanges();
    
    await fixture.whenStable();

    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('.book'));

    expect(items.length).toBe(2);

    const firstItem: DebugElement = items[0];
    expect(firstItem.componentInstance.book).toEqual(BOOKS_MOCK[0]);
  }))









});
