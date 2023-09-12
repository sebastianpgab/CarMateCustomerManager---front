import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailingAddComponent } from './mailing-add/mailing-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../canActivate-guard.service';

const routes = [
  {path: 'mailing', component: MailingAddComponent, canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [MailingAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class MailingModule { }
