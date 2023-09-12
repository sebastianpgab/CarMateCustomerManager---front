import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config } from '../model';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './model';
import { AccountService } from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private accountService: AccountService,
    private httpClient: HttpClient, 
    @Inject(CONFIG) private config: Config) { }

  getVehicles(){
  return this.httpClient.get<Vehicle[]>(`${this.config.apiUrl}api/vehicle`, this.accountService.getHttpOptions())
  }

  getVehicleByVin(vin: string){
    return this.httpClient.get<Vehicle>(`${this.config.apiUrl}api/vehicle/vin/${vin}`, this.accountService.getHttpOptions())
  }

  getVehicleById(id: number){
    return this.httpClient.get<Vehicle>(`${this.config.apiUrl}api/vehicle/${id}`, this.accountService.getHttpOptions())
  }

  updateVehicle(updatedVehicle: Vehicle, id: number | undefined){
    return this.httpClient.put<Vehicle>(`${this.config.apiUrl}api/vehicle/${id}`, updatedVehicle, this.accountService.getHttpOptions());
  }

  createVehicle(vehicle: Vehicle, clientId: number){
    return this.httpClient.post<Vehicle>(`${this.config.apiUrl}api/vehicle/${clientId}`, vehicle, this.accountService.getHttpOptions());
  }

  sendSmSToClient(idVehicle: number | undefined) {
    return this.httpClient.post<boolean>(`${this.config.apiUrl}api/send/sms`, idVehicle, this.accountService.getHttpOptions());
  }

}