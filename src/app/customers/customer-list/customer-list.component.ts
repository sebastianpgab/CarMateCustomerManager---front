import { Component, OnInit } from '@angular/core';
import { Customer } from '../model';
import { CustomerService } from '../customer.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styles: [
  ]
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  customer: Customer;
  fullName: string;
  phoneNumber: string;

  constructor( 
    private customerService: CustomerService, 
    private messageService: MessageService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(): void{
    this.customerService.getCustomers().subscribe(resposne => {
    this.messageService.success("Poprawnie załadowana listę klientów");
    this.customers = resposne;
    this.customer = this.customers[0];
    },
    error => this.messageService.error("Nie udało się załadować listy klientów"));
  }

  // na razie nie używana
  /*deleteCustomer(): void{
    this.customerService.deleteCustomer(this.customer).subscribe(
      () => {this.messageService.success("Udało się usunąć klienta"); this.refresh()},
      error => this.messageService.error("Nie udało się usunąć klienta"));
  }*/

  searchByFullName(): void{
    this.customerService.searchByFullName(this.fullName).subscribe(response => {
      this.customers = response;
      this.messageService.success("Poprawnie wyszukano");
    },
    error => this.messageService.error("Nie wyszukano klienta"))
  }

  searchByPhoneNumber(): void{
    this.customerService.searchByPhoneNumber(this.phoneNumber).subscribe(response => {
      this.customers = response;
      this.messageService.success("Poprawnie wyszukano");
    },
    error => this.messageService.error("Nie wyszukano klienta"))
  }

}
