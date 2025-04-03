import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./style.scss']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = true;
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

}
