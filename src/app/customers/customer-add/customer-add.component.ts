import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { CustomerService } from '../customer.service';
import { Customer } from '../model';

@Component({
  selector: 'cus-customer-add',
  templateUrl: './customer-add.component.html',
  styles: [
  ]
})
export class CustomerAddComponent implements OnInit {

  customer: Customer;

  constructor(
  private customerService: CustomerService,
  private messageService: MessageService) { }

  ngOnInit(): void {
    this.customer = {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      email: ''
    }
  }

  add(): void{
    this.customerService.createCustomer({
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      address: this.customer.address,
      phoneNumber: this.customer.phoneNumber,
      email: this.customer.email,
    }).subscribe(
      () => this.messageService.success("Udało się dodać użytkownika"),
      error => this.messageService.error("Nie udało się dodać użytkownika"));
  }
}
