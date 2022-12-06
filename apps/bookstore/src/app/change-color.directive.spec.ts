import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeColorDirective } from './change-color.directive';

@Component({
  selector: 'cye-workshop-test',
  template: `<div cyeWorkshopChangeColor>color should be red</div>`
})
class TestComponent {}

describe('ChangeColorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, ChangeColorDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change color to red', () => {
    const divWithDirective: HTMLDivElement = fixture.debugElement.query(By.directive(ChangeColorDirective)).nativeElement;

    expect(divWithDirective.style.color).toBe('red');
  })
});

