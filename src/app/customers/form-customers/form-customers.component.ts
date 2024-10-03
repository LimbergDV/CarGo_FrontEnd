// src/app/form-customers/form-customers.component.ts

import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';// Ajusta la ruta
import { CustomerService } from '../../../services/customer.service'; // Ajusta la ruta

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
  styleUrls: ['./form-customers.component.css']
})
export class FormCustomersComponent implements OnInit{
  customer: Customer[] = []
  custom: Customer = {
    name: '',
    last_names: '',
    phone_number: '',
    CURP: '',
    number_licence: '',
  }

  constructor(private _customerService: CustomerService){}


  ngOnInit():void{
    this._customerService.createCustomer(this.custom).subscribe(
      response =>{
        this.custom = response
        console.log(this.customer);
        this.limpiarFormulario();

      }
    )
  }
  limpiarFormulario() {
    this.custom = {
      id_customer: 0,
      name: '',
      last_names: '',
      phone_number: '',
      CURP: '',
      number_licence: '',
      birthdate: ''
    };
  }
}
