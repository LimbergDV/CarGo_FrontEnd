import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers/models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})

export class CustomerTableComponent implements OnInit {
    customers: Customer[] = [];
    selectedCustomer: Customer | null = null;

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
      this.obtenerClientes();
    }

    obtenerClientes() {
      this.customerService.getAllCustomers().subscribe(response => {
        this.customers = response;
      });
    }

    eliminarCliente(id: number) {
      this.customerService.deleteCustomer(id).subscribe(() => {
        this.customers = this.customers.filter(customer => customer.id_customer !== id);
      });
    }

    actualizarCliente(cliente: Customer) {
      this.selectedCustomer = { ...cliente };
    }

    guardarActualizacion() {
      if (this.selectedCustomer) {
        this.customerService.updateCustomer(this.selectedCustomer).subscribe(response => {
          const index = this.customers.findIndex(c => c.id_customer === response.id_customer);
          if (index !== -1) {
            this.customers[index] = response; // Actualiza el cliente en la lista
          }
          this.limpiarSeleccion(); // Limpia la selección después de actualizar
        });
      }
    }

    // Método para limpiar la selección de cliente
    limpiarSeleccion() {
      this.selectedCustomer = null;
    }
}
