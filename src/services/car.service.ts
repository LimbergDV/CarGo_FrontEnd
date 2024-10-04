import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../app/cars/models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private _apiUrl = 'http://localhost:3000/car';

  constructor(private hhtp: HttpClient) { }

  //Métodos para el crud completo de CARS

  createCar(car: Car):Observable<Car>{
    console.log(car);
    return this.hhtp.post<Car>(`${this._apiUrl}/addCar`, car);
  }

  getAllCars():Observable<Car[]>{
    return this.hhtp.get<Car[]>(`${this._apiUrl}/getCars`);
  }

  updateCars(car:Car):Observable<Car>{
    return this.hhtp.put<Car>(`${this._apiUrl}/updateCar/${car.id_car}`, car);
  }

  deleateCar(id:number): Observable<void>{
    return this.hhtp.delete<void>(`${this._apiUrl}/deleateCar/${id}`);
  }
}
