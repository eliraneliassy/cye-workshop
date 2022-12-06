import { BOOKS_MOCK } from './../../books.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { By } from '@angular/platform-browser';
import { Book } from '../book.interface';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should renderer book on the screen', () => {
    component.book = BOOKS_MOCK[0];

    fixture.detectChanges();

    const title: HTMLDivElement = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toContain(BOOKS_MOCK[0].title);

    const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toBe(BOOKS_MOCK[0].previewImgUrl)
  });

  it('should add to cart', () => {
    jest.spyOn(component.addToCart, 'emit');

    component.onAddToCart();

    expect(component.addToCart.emit).toHaveBeenCalledTimes(1);
  });

  it('should add to cart', () => {
    component.addToCart.subscribe((book: Book) => {
      expect(book).toEqual(BOOKS_MOCK[0])
    });

    component.onAddToCart();
  });
});
