import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config } from '../model';
import { Login } from './account-login/model';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  loginParameters: Login;
  token: string;
  isLogged: boolean = false;

  constructor(
    private httpClient: HttpClient, 
    @Inject(CONFIG) private config: Config,
    private messageService: MessageService,
    private router: Router) { }

    login(loginParameters: Login) {
      return this.httpClient.post<string>(`${this.config.apiUrl}api/account/login`, loginParameters,  { responseType: 'text' as 'json' });
    }

    loginUser(): void {
      this.login(this.loginParameters).subscribe(
        response => {
          console.log("Response:", response);
          this.token = response;
          localStorage.setItem('token', this.token); 
          this.messageService.success("Poprawnie zalogowano");
          this.isLogged = true;
          this.router.navigate(['/browser']);
        },
        error => {this.messageService.error("Niepoprawne dane")
        console.error("Error:", error);  
      }
      );
    }

    logout(){
      this.isLogged = false;
    }

    

}
