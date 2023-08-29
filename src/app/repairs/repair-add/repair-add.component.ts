import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { RepairsService } from '../repairs.service';
import { Repair } from '../model';


@Component({
  selector: 'app-repair-add',
  templateUrl: './repair-add.component.html',
  styles: [
  ]
})
export class RepairAddComponent implements OnInit {

  vehicleId: number;
  repair: Repair = {
    repairDate: new Date(),
    cost: 0,
    description: '',
  };

  constructor(private activatedRoute: ActivatedRoute, private messageService: MessageService, private repairService: RepairsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
     this.vehicleId = parseInt(params['vehicleId']);
     this.repair.vehicleId = this.vehicleId;
    });
  }

  addRepair() {
    this.repairService.addRepair(this.repair).subscribe(
      () => {this.messageService.success("Udało się dodać naprawę");},
      error => this.messageService.error("Nie udało się dodać naprawy")
    );
  }

}
