import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private loggerService: LoggerService) { }

  plus(a: number, b: number): number {
    const result = a + b;
    this.loggerService.log(`plus result is ${result}`);
    return result;
  }
}
