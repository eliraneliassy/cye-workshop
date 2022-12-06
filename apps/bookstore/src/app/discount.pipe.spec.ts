
import { DiscountPipe } from './discount.pipe';

describe('DiscountPipe', () => {
  let pipe: DiscountPipe;
  beforeEach(() => {
    pipe = new DiscountPipe();
  })
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('should give a 10% discount if price is bigger than x', () => {
    const result = pipe.transform(120, 100);

    expect(result).toBe(108);

    const result2 = pipe.transform(120, 130);
    expect(result2).toBe(120);
  })
});
