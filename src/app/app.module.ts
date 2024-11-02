import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormCustomersComponent } from './customers/form-customers/form-customers.component';
import { CustomerTableComponent } from './customers/customer-table/customer-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewCustomerComponent } from './customers/view-customer/view-customer.component';
import { ViewCarsComponent } from './cars/view-cars/view-cars.component';
import { FormCarComponent } from './cars/form-car/form-car.component';
import { CarsTableComponent } from './cars/cars-table/cars-table.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormCustomersComponent,
    ViewCustomerComponent,
    CustomerTableComponent,
    ViewCarsComponent,
    FormCarComponent,
    CarsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
