import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styles: [
  ]
})
export class AccountLoginComponent implements OnInit {

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.loginParameters = {
      email: '',
      password: ''
    }
  }



}
