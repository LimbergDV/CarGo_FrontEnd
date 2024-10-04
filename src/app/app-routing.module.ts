import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ViewCarsComponent } from './view-cars/view-cars.component';

const routes: Routes = [
  {path:'Clientes', component:ViewCustomerComponent},
  {path:'Autos', component: ViewCarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
