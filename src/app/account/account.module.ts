import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountLoginComponent } from './account-login/account-login.component';
import { RouterModule } from '@angular/router';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../canActivate-guard.service';

const routes = [
  {path: 'account/login', component: AccountLoginComponent, canAcrivate: [AuthGuard]},
  {path: 'account/register', component: AccountRegisterComponent},

]

@NgModule({
  declarations: [
    AccountLoginComponent,
    AccountRegisterComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule {


 }
