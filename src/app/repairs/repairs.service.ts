import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Repair } from './model';
import { CONFIG, Config } from '../model';
import { AccountService } from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class RepairsService {

  constructor(
    private httpClient: HttpClient, 
    private accountService: AccountService,
    @Inject(CONFIG) private config: Config) { }
  
  getRepairs(id: number){
    return this.httpClient.get<Repair[]>(`${this.config.apiUrl}api/vehicle/${id}/repair`, this.accountService.getHttpOptions());
  }

  getRepair(id: number, repairId: number){
    return this.httpClient.get<Repair>(`${this.config.apiUrl}api/vehicle/${id}/repair/${repairId}`, this.accountService.getHttpOptions());
  }

  updateRepair(id: number, repairId: number, repair: Repair){
    return this.httpClient.put<Repair>(`${this.config.apiUrl}api/vehicle/${id}/repair/${repairId}`, repair, this.accountService.getHttpOptions());
  }

  addRepair(repair: Repair){
    return this.httpClient.post<Repair>(`${this.config.apiUrl}api/vehicle/${repair.vehicleId}/repair`, repair, this.accountService.getHttpOptions());
  }

  searchRepairByDate(id: number, startDate: Date, endDate: Date){

    const params = new HttpParams()
    .set('id', id.toString())
    .set('startDate', startDate.toISOString())
    .set('endDate', endDate.toISOString());

    return this.httpClient.get<Repair[]>(`${this.config.apiUrl}api/vehicle/${id}/repair/search-by-date`, { params, ...this.accountService.getHttpOptions() })
  }

  GetAllVehiclesRepairedByMonth(){
    return this.httpClient.get<Repair[]>(`${this.config.apiUrl}api/vehicle/repair/all-repaired-by-month`, this.accountService.getHttpOptions())
  }
}
