import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
  '.isActivate {text-decoration: underline}',
  '.isEven {color: green}'
]
})
export class AppComponent implements OnInit {

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.initializeUserSession();
  }

  private initializeUserSession(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.accountService.token = token;
      this.accountService.isLogged = true;
    }
  }

}

