import { NgModule } from '@angular/core';
import { VehicleService } from './vehicles.service';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { RepairsComponent } from '../repairs/repairs/repairs.component';
import { RepairsModule } from '../repairs/repairs.module';
import { AuthGuard } from '../canActivate-guard.service';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';

const routes = [
  {path: 'vehicles', component: VehicleListComponent, canActivate: [AuthGuard]},
  {path: 'vehicle/:id', component: VehicleDetailsComponent, canActivate: [AuthGuard]},
  {path: 'vehicles/:id/repair', component: RepairsComponent, canActivate: [AuthGuard]},
  {path: 'vehicles/:clientId', component: VehicleAddComponent, canActivate: [AuthGuard]}

]

@NgModule({
  declarations: [
    VehicleListComponent,
    VehicleDetailsComponent,
    VehicleAddComponent
  ],
  imports: [
    SharedModule,
    RepairsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    VehicleService
  ],

  exports: [
    VehicleListComponent,
    VehicleDetailsComponent,
  ]
})
export class VehiclesModule { }
