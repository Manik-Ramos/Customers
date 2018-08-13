import { CustomerDataService } from './../customer-data.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import { CUSTOMER } from '../sample-customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  selectedCustomer: Customer;


  constructor(private customerDataService: CustomerDataService) { }

  getCustomers(): void {
    this.customers = this.customerDataService.getCustomers();
  }

  ngOnInit() {
    this.getCustomers();
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }
}