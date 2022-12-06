import { Component } from '@angular/core';
import { ChangeColorDirective } from './change-color.directive';

@Component({
  selector: 'cye-workshop-test',
  template: `<div cyeWorkshopChangeColor>color should be red</div>`
})
class TestComponent {}

describe('ChangeColorDirective', () => {
  it('should create an instance', () => {
    const directive = new ChangeColorDirective();
    expect(directive).toBeTruthy();
  });
});
