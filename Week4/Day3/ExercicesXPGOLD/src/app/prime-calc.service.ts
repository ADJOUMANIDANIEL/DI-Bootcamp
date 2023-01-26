import { Injectable } from '@angular/core';
import { primeCalc } from './primeCalc';


@Injectable({
  providedIn: 'root'
})
export class PrimeCalcService {

  constructor() { }

  get() {
    return primeCalc;
  }
}
