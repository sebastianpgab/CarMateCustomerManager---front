import { NgModule } from '@angular/core';
import { VehiclesListService } from './vehicles.service';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { RepairsComponent } from '../repairs/repairs/repairs.component';
import { RepairsModule } from '../repairs/repairs.module';

const routes = [
  {path: 'vehicles', component: VehicleListComponent},
  {path: 'vehicle/:id', component: VehicleDetailsComponent},
  {path: 'vehicles/:id/repair', component: RepairsComponent}
]

@NgModule({
  declarations: [
    VehicleListComponent,
    VehicleDetailsComponent
  ],
  imports: [
    SharedModule,
    RepairsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    VehiclesListService
  ],

  exports: [
    VehicleListComponent,
    VehicleDetailsComponent,
  ]
})
export class VehiclesModule { }
