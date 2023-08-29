import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config } from '../model';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customers/model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getCustomers() {
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}api/client`);
  }

  createCustomer(customer: Customer) {
    return this.httpClient.post(`${this.config.apiUrl}api/client`, customer);
  }

  updateCustomer(id: number, customer: Customer) {
    return this.httpClient.put<Customer>(`${this.config.apiUrl}api/client/${id}`, customer);
  }

  /*deleteCustomer(customer: Customer) {
    return this.httpClient.delete(`${this.config.apiUrl}api/client/${customer.id}`);
  }*/

  getCustomer(id: number){
    return this.httpClient.get<Customer>(`${this.config.apiUrl}api/client/${id}`);
  }

  searchByFullName(fullName: string){
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}api/client/fullname/${fullName}`);
  }

  searchByPhoneNumber(phoneNumber: string){
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}api/client/phoneNumber/${phoneNumber}`);
  }
}  