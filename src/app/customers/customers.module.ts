import { NgModule } from '@angular/core';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './customer.service';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { AuthGuard } from '../canActivate-guard.service';

const routes = [
  {path: 'clients', component: CustomerListComponent, canActivate: [AuthGuard]},
  {path: 'client/add', component: CustomerAddComponent, canActivate: [AuthGuard]},
  {path: 'browser', component: CustomerBrowserComponent, canActivate: [AuthGuard]},
  {path: 'client/:id', component: CustomerUpdateComponent, canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [
    CustomerAddComponent,
    CustomerBrowserComponent,
    CustomerListComponent,
    CustomerUpdateComponent,

  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CustomerService
  ],
  exports: [
    CustomerAddComponent,
    CustomerBrowserComponent,
  ]
})

export class CustomersModule { }
