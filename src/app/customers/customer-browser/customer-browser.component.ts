import { Component, OnInit} from '@angular/core';
import { CustomerService } from '../customer.service';
import { RepairsService } from 'src/app/repairs/repairs.service';
import { MessageService } from 'src/app/services/message.service';



@Component({
  selector: 'cus-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./style.scss']
})
export class CustomerBrowserComponent implements OnInit {

  amountOfRepairs: number = 0;
  cashFlow: number | null = 0;
  ids: (number | null | undefined)[];
  numberOfClients: number = 0;
  currentIdIndex = 0;

  constructor( 
    private customerService: CustomerService, 
    private repairService: RepairsService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAmountOfClients();
    this.getAmountOfRepair();
    this.getCashFlow();
  }

  getAmountOfClients(): void {
    this.customerService.getCustomers().subscribe(response => {
      this.ids = response.map(customer => customer.id)
      this.numberOfClients = this.ids.length;
    },
    error => this.messageService.error("Nie udało się pobrać klientów (stat.)"));
  }

  getAmountOfRepair() : void {
    this.repairService.GetAllVehiclesRepairedByMonth().subscribe(response =>{
      this.amountOfRepairs = response.length},
      error => this.messageService.error("Nie udało się pobrać napraw (stat.)"));
  }

  getCashFlow() : void {
    this.repairService.GetAllVehiclesRepairedByMonth().subscribe(response =>{
      let costs: (number | null)[] = response.map(p => p.cost);
      let validCosts = costs.filter(cost => cost !== null) as number[];
      if(validCosts.length !== 0){
        this.cashFlow = validCosts.reduce((acumulator, currentValue) => acumulator + currentValue, 0)
      }
    },
    error => this.messageService.error("Nie udało się pobrać kwoty (stat.)"))
  }
}