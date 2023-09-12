import { Component, OnInit } from '@angular/core';
import { User } from './model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styles: [
  ]
})
export class AccountRegisterComponent implements OnInit {


  constructor(public accountService: AccountService) {

   }

  ngOnInit(): void {
    
    this.accountService.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      nationality: '',
      dateOfBirth: new Date(),
      roleId: 1
    }

  }

}
