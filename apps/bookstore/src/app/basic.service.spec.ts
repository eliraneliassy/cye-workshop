import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

import { BasicService } from './basic.service';

describe('BasicService', () => {
  let service: BasicService;
  let loggerService: LoggerService

  beforeEach(() => {
    TestBed.configureTestingModule({
      
    });
    service = TestBed.inject(BasicService);
    loggerService = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return sum of 2 paramaters', () => {
    

    jest.spyOn(loggerService, 'log');

    const result = service.plus(2, 3);

    expect(loggerService.log).toHaveBeenCalledTimes(1);

    expect(result).toBe(5);
  })

});

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