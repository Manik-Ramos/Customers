import { Customer } from './../customer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.css']
})
export class CustomersDetailComponent implements OnInit {
  @Input() customer: Customer;
  constructor() { }

  ngOnInit() {
  }

}
