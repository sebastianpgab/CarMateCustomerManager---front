import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config } from '../model';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customers/model';
import { AccountService } from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient,
    private accountService: AccountService,
    @Inject(CONFIG) private config: Config
  ) { }

  getCustomers() {
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}api/client`, this.accountService.getHttpOptions());
  }

  createCustomer(customer: Customer) {
    return this.httpClient.post(`${this.config.apiUrl}api/client/add`, customer, this.accountService.getHttpOptions());
  }

  updateCustomer(id: number, customer: Customer) {
    return this.httpClient.put<Customer>(`${this.config.apiUrl}api/client/${id}`, customer, this.accountService.getHttpOptions());
  }

  /*deleteCustomer(customer: Customer) {
    return this.httpClient.delete(`${this.config.apiUrl}api/client/${customer.id}`);
  }*/

  getCustomer(id: number){
    return this.httpClient.get<Customer>(`${this.config.apiUrl}api/client/${id}`, this.accountService.getHttpOptions());
  }

  searchByFullName(fullName: string){
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}api/client/fullname/${fullName}`, this.accountService.getHttpOptions());
  }

  searchByPhoneNumber(phoneNumber: string){
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}api/client/phoneNumber/${phoneNumber}`, this.accountService.getHttpOptions());
  }
}  