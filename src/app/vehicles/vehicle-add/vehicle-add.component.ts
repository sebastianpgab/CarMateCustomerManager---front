import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model';
import { VehicleService } from '../vehicles.service';
import { MessageService } from 'src/app/services/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styles: [
  ]
})
export class VehicleAddComponent implements OnInit {
  
  vehicle: Vehicle = {
    make: '',
    model: '',
    vin: '',
    year: null,
    engine: '',
    kilometers: null,
    status: "Czeka na naprawę"
  };

  clientId: number;
  constructor(private vehicleService: VehicleService, private messageService: MessageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.clientId = parseInt(params['clientId']);
    });
  }

  createVehicle() {
    this.vehicleService.createVehicle(this.vehicle, this.clientId).subscribe( response => {
          this.messageService.success("Dodano pojazd")
    },
    () => this.messageService.error("Nie dodano pojazdu"))
  }

}
