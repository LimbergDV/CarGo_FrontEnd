import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customers/models/customer';
import { CustomerService } from '../../../services/customer.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-form-rent',
  templateUrl: './form-rent.component.html',
  styleUrl: './form-rent.component.css'
})
export class FormRentComponent implements OnInit {
  customers: Customer [] = [];

  constructor(private customerService: CustomerService){}

  ngOnInit(): void {
      this.loadCustomers();
  }

  loadCustomers(){
    this.customerService.getAllCustomers().subscribe(data =>{
      this.customers = data;
    });
  }
}
