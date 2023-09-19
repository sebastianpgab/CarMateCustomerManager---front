import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config } from '../model';
import { MailRequest } from './model';
import { AccountService } from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor(
    private httpClient: HttpClient,
    private accountService: AccountService,
    @Inject(CONFIG) private config: Config
  ) { }

    sendMailToClient(mailRequest: MailRequest) {
      return this.httpClient.post<MailRequest>(`${this.config.apiUrl}api/send/mail`, mailRequest, this.accountService.getHttpOptions());
    }
}
