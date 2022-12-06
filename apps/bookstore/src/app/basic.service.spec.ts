import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

import { BasicService } from './basic.service';

// describe('BasicService', () => {
//   let service: BasicService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(BasicService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('BasicService', () => {
  it('Should return sum of 2 paramaters', () => {
    const loggerService: LoggerService = new LoggerService();
    const basicService: BasicService = new BasicService(loggerService);

    jest.spyOn(loggerService, 'log');

    const result = basicService.plus(2, 3);

    expect(loggerService.log).toHaveBeenCalledTimes(1);

    expect(result).toBe(5);
  })
})