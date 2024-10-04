export interface Car {
  id_car?: number,
  brand: string,
  model: string,
  year: string, //el uso de string es porque quiero el año del carro, no mes y día.
  type_car: string,
  plate_number: string
}
