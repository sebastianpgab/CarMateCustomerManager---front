import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepairsComponent } from './repairs/repairs.component';
import { RouterModule } from '@angular/router';
import { RepairUpdateComponent } from './repair-update/repair-update.component';
import { FormsModule } from '@angular/forms';
import { RepairAddComponent } from './repair-add/repair-add.component';

const routes = [
  {path: 'vehicles/:vehicleId/repair', component: RepairsComponent},
  {path: 'vehicles/:vehicleId/repair/:repairId', component: RepairUpdateComponent},
  {path: 'vehicles/:vehicleId/repair-add', component: RepairAddComponent}
]

@NgModule({
  declarations: [
    RepairsComponent,
    RepairUpdateComponent,
    RepairAddComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RepairsComponent
  ]
})
export class RepairsModule { }
