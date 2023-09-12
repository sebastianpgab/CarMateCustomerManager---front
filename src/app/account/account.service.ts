import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config } from '../model';
import { Login } from './account-login/model';
import { MessageService } from '../services/message.service';
import { Router, UrlSegment } from '@angular/router';
import { User } from './account-register/model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  loginParameters: Login;
  user: User;
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

    register(user: User){
      return this.httpClient.post<void>(`${this.config.apiUrl}api/account/register`, user)
    }

    loginUser(): void {
      this.login(this.loginParameters).subscribe(
        response => {
          this.token = response; 
          localStorage.setItem('token', this.token); 
          this.messageService.success("Poprawnie zalogowano");
          this.isLogged = true;
          this.router.navigate(['/browser']);
        },
        error => {this.messageService.error("Niepoprawne dane")
      }
      );
    }

    logout(){
      this.isLogged = false;
    }

    registerUser(): void {
      this.register(this.user).subscribe(respnse  =>{
       this.messageService.success("Poprawnie zarejestrowano")
       this.router.navigate(['/account/login']);
      },
      error => {this.messageService.error("Niepoprawna rejestracja")
      })
    }
    
    getHttpOptions() {
      const token = localStorage.getItem('token');
      let options = {};
      if (token) {
        options = {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          }),
        };
      }
      return options;
    }

}
