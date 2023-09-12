import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicles.service';
import { Vehicle } from '../model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'veh-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styles: [
  ]
})
export class VehicleListComponent implements OnInit {

  clientId: any;
  constructor(private clientService: VehicleService, private messageService: MessageService) { }

  vehicles: Vehicle[];
  vin: string;
  name: string;

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
      this.clientService.getVehicles().subscribe(
        response => this.vehicles = response,
        error => this.messageService.error("Lista pojazdów nie została pobrana"));
  }

    getVehicleByVin(vin: string){
      this.clientService.getVehicleByVin(vin).subscribe(
        resposne => this.vehicles = [resposne],
        error => this.messageService.error("Vin nie istnieje"))
    }    
}
