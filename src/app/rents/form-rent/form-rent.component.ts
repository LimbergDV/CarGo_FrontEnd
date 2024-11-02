import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customers/models/customer';
import { CustomerService } from '../../../services/customer.service';
import { subscribeOn } from 'rxjs';
import { Car } from '../../cars/models/car';
import { RentService } from '../../../services/rent.service';
import { CarService } from '../../../services/car.service';
import { Rent } from '../models/rent';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-rent',
  templateUrl: './form-rent.component.html',
  styleUrl: './form-rent.component.css'
})
export class FormRentComponent implements OnInit {
  customers: Customer [] = [];
  cars: Car [] = [];
  rent: Rent = {
    id_customer: 0,
    id_rent: 0,
    id_car: 0,
    start_date: new Date(),
    end_date: new Date(),
    total_price: 0,
  };

  constructor(private customerService: CustomerService,
    private rentService: RentService,
    private carService: CarService){}

  ngOnInit(): void {
      this.loadCustomers();
      this.loadCars();
  }

  loadCustomers(){
    this.customerService.getAllCustomers().subscribe(data =>{
      this.customers = data;
    });
  }

  loadCars(){
    this.carService.getAllCars().subscribe(data =>{
      this.cars = data;
    })
  }

  rentCar(): void{
    if (!this.rent.id_customer || !this.rent.id_car || !this.rent.start_date || !this.rent.end_date) {
      Swal.fire('Error', 'All fields are required!', 'error');
      return;
    }

    this.rentService.createRent(this.rent).subscribe(
      (response) => {
        console.log('Renta registrada:', response);
        Swal.fire({
          icon: 'success',
          title: 'Car rented successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        this.resetForm();
      },
      (error) => {
        console.error('Error registering rent:', error);
        Swal.fire('Error', 'There was an error registering the rent.', 'error');
      }
    );
  }

  resetForm(): void {
    this.rent = {
      id_customer: 0,
      id_rent: 0,
      id_car: 0,
      start_date: new Date(),
      end_date: new Date(),
      total_price: 0,
    };
  }
}
