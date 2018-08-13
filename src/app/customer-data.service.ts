import { CUSTOMER } from './sample-customer';
import { Customer } from './customer';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerDataService {

  constructor() { }

  getCustomers(): Customer[] {
    return CUSTOMER;
  }
}
