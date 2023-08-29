import { Component, OnInit } from '@angular/core';
import { Repair } from '../model';
import { ActivatedRoute } from '@angular/router';
import { RepairsService } from '../repairs.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styles: [
  ]
})
export class RepairsComponent implements OnInit {

  repairs: Repair[];
  vehicleId: number;
  startDate: string;
  endDate: string; 
  constructor(private activatedRoute: ActivatedRoute, private repairService: RepairsService, private messageService: MessageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
     this.vehicleId = parseInt(params['vehicleId']);
    this.repairService.getRepairs(this.vehicleId).subscribe(respone =>
      this.repairs = respone,
      error => this.messageService.error("Lista napraw nie została pobrana"));
      });
  }

  searchRepairByDate(){
    const startDateObj = new Date(this.startDate);
    const endDateObj = new Date(this.endDate);

    this.repairService.searchRepairByDate(this.vehicleId, startDateObj, endDateObj).subscribe(
      response => {
      this.repairs = response
      this.messageService.success("Udało się pobrać pojazdy");
      },
      error => this.messageService.error("Lista napraw nie została pobrana")
    );}



}

