import { tick } from '@angular/core/testing';
import { fakeAsync } from '@angular/core/testing';
import { delay } from 'rxjs';
import { BookComponent } from './book/book.component';
import { By } from '@angular/platform-browser';
import { BooksService } from './books.service';
import { BOOKS_MOCK } from './../books.mock';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponent } from 'ng-mocks';
import { DebugElement } from '@angular/core';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const booksServiceMock: BooksService = {
    getBooks: (term: string) => 
    {
      return of(BOOKS_MOCK).pipe(delay(0))
    }
    
  } as any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // HttpClientTestingModule
      ],
      declarations: [AppComponent,
        // BookComponent
        MockComponent(BookComponent)

      ],
      providers: [
        { provide: BooksService, useValue: booksServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {

    expect(component).toBeTruthy();
  });

  it('should render books', () => {
    const items = fixture.debugElement.queryAll(By.css('.book'));

    expect(items.length).toBe(2);

    const firstItem: DebugElement = items[0]; 
    expect(firstItem.componentInstance.book).toEqual(BOOKS_MOCK[0]);
  })

  







});
