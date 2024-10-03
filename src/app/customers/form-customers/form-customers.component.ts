import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer'; // Ajusta la ruta si es necesario
import { CustomerService } from '../../../services/customer.service'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
  styleUrls: ['./form-customers.component.css']
})
export class FormCustomersComponent implements OnInit {
  // Definimos un array de clientes vacío, por si en algún momento necesitas listar clientes
  customers: Customer[] = [];

  // Objeto para representar el cliente en el formulario
  custom: Customer = {
    name: '',
    last_names: '',
    phone_number: '',
    CURP: '',
    number_license: '',
    birthdate: ''
  };

  constructor(private _customerService: CustomerService) {}

  ngOnInit(): void {
    // Aquí no debes llamar a createCustomer; en su lugar, puedes cargar clientes si lo necesitas
    console.log('Formulario inicializado');
  }

  // Método que se llamará al enviar el formulario
  registerCustomer(): void {
    console.log(this.custom)
    console.log('Formulario enviado');
    console.log('Valores del formulario:');
    console.log('Trainer ID:', this.custom.id_customer);
    console.log('Team Name:', this.custom.name);
    console.log('Creation Date:', this.custom.last_names);
    console.log('Battle Points:', this.custom.phone_number);
    console.log('Description:', this.custom.CURP);
    console.log('Total Pokémon:', this.custom.number_license);
    console.log('Total Pokémon:', this.custom.birthdate);

    this._customerService.createCustomer(this.custom).subscribe(
      (response: Customer) => {
        console.log('Cliente registrado:', response);
        this.customers.push(response);
        this.limpiarFormulario();
      },
      (error) => {
        console.log('Error al registrar el cliente:', error);
      }
    );
  }

  // Método para limpiar el formulario tras enviar los datos
  limpiarFormulario(): void {
    this.custom = {
      name: '',
      last_names: '',
      phone_number: '',
      CURP: '',
      number_license: '',
      birthdate: ''
    };
  }
}
