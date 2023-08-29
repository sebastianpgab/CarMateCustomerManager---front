import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config } from '../model';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesListService {

  constructor(
    private httpClient: HttpClient, 
    @Inject(CONFIG) private config: Config) { }

  getVehicles(){
  return this.httpClient.get<Vehicle[]>(`${this.config.apiUrl}api/vehicle`)
  }

  getVehicleByVin(vin: string){
    return this.httpClient.get<Vehicle>(`${this.config.apiUrl}api/vehicle/vin/${vin}`)
  }

  getVehicleByClientName(name: string){
    return this.httpClient.get<Vehicle[]>(`${this.config.apiUrl}api/vehicle/searchedClient?name=${name}`)
  }

  getVehicleById(id: number){
    return this.httpClient.get<Vehicle>(`${this.config.apiUrl}api/vehicle/${id}`)
  }

  updateVehicle(updatedVehicle: Vehicle, id: number){
    return this.httpClient.put<Vehicle>(`${this.config.apiUrl}api/vehicle/${id}`, updatedVehicle);
  }

  sendSmSToClient(idVehicle: number) {
    return this.httpClient.post<boolean>(`${this.config.apiUrl}api/send/sms`, idVehicle);
  }

}