import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../app/customers/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _apiUrl = 'http://localhost:3000/customer';

  constructor(private hhtp: HttpClient) { }

  //Métodos para el crud completo de CUSTOMERS

  createCustomer(customer: Customer): Observable<Customer>{
    console.log(customer);

    return this.hhtp.post<Customer>(`${this._apiUrl}/addCustomer`, customer);
  }

  getAllCustomers(): Observable<Customer[]>{
    return this.hhtp.get<Customer[]>(`${this._apiUrl}/getCustomers`);
  }

  updateCustomer(customer:Customer): Observable<Customer>{
    return this.hhtp.put<Customer>(`${this._apiUrl}/updateCustomer/${customer.id_customer}`, customer);
  }

  deleteCustomer(id:number): Observable<void>{
    return this.hhtp.delete<void>(`${this._apiUrl}/deleateCustomer/${id}`);
  }

}
