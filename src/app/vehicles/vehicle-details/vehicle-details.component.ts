import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicles.service';
import { Vehicle } from '../model';
import { Customer } from 'src/app/customers/model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styles: [
  ]
})

export class VehicleDetailsComponent implements OnInit {
  
  repairStatusOptions: string[] = ["W trakcie naprawy", "Czeka na naprawę", "Naprawiony"];
  repairNotificationOptions: string[] = ['Tak', 'Nie'];
  sendRepairNotification: string = 'Nie';
  vehicle: Vehicle;
  updatedVehicle: Vehicle;
  update: boolean = false;
  customer: Customer;

  constructor(private activatedRoute: ActivatedRoute, private vehicleListService: VehicleService, private messageService: MessageService) { }

  ngOnInit() {
    this.fetchVehicleById();
    this.vehicle = {
      make: '',
      model: '',
      vin: '',
      year: null,
      engine: '',
      kilometers: null,
      status: ''
    }
  }

  fetchVehicleById(){
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
        this.vehicleListService.getVehicleById(id).subscribe(vehicle => {
          this.vehicle = vehicle;
          this.updatedVehicle = { ...vehicle };
        });
      })
  }

  showUpdate() {
    this.update = this.update === false ? true : false;
  }

  updateVehicle() {
    this.vehicleListService.updateVehicle(this.updatedVehicle, this.vehicle.id).subscribe(
       updatedVehicle => {
        this.vehicle = {...updatedVehicle}
        if(this.sendRepairNotification === "Tak"){
          this.sendStatusToCustomer();
        }
        this.messageService.success("Poprawnie zaktaulizowano pojazd.")
       },
       error => this.messageService.error("Błąd przy akutalizacji pojazdu.")
    )
  }
  
  sendStatusToCustomer(){
    this.vehicleListService.sendSmSToClient(this.vehicle.id).subscribe(response => {
      this.messageService.success("Poprawnie wysłano SMS")
    },
    error => this.messageService.error("Nie wysłano SMS")
  )
  }

}