import { Component, OnInit } from '@angular/core';
import { Customer } from '../model';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styles: [
  ]
})
export class CustomerUpdateComponent implements OnInit {

  customer: Customer;
  customerId: number;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private messageService: MessageService) { }

  ngOnInit() : void {
    this.activatedRoute.params.subscribe(params => {
      this.customerId = parseInt(params['id'])
      this.getCustomer();
    })
  }

  updateCustomer() : void {
    this.customerService.updateCustomer(this.customerId, this.customer).subscribe(response =>
      {this.customer = response
      this.messageService.success("Poprawnie edytowano klietna")
    },
      error => this.messageService.error("Nie udało się edytować klienta"));
  }

  getCustomer() : void {
    this.customerService.getCustomer(this.customerId).subscribe(response => {this.customer = response})
  }
}
