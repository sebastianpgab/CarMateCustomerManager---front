import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { RepairsService } from '../repairs.service';
import { Repair } from '../model';

@Component({
  selector: 'app-repair-update',
  templateUrl: './repair-update.component.html',
  styles: [
  ]
})
export class RepairUpdateComponent implements OnInit {

  repair: Repair = {
    id: null,
    repairDate: null,
    cost: null,
    description: '',
    vehicleId: null,
  };
  repairId: number;
  vehicleId: number;

  constructor(private activatedRoute: ActivatedRoute, private repairService: RepairsService, private messageService: MessageService) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.repairId = parseInt(params['repairId']);
      this.vehicleId = parseInt(params['vehicleId']);
      this.repairService.getRepair(this.vehicleId, this.repairId).subscribe(repair =>{
        this.repair = { ...repair };
      });
    })
  }

  updateRepair(){
    this.repairService.updateRepair(this.vehicleId, this.repairId, this.repair).subscribe(response => {
      this.repair = response;
      this.messageService.success("Poprawnie zapisano");
      },
      error => {this.messageService.error("Nie udało się zapisać")}
    )
  }

}
