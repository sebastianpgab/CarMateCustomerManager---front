import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config } from '../model';
import { MailRequest } from './model';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

    sendMailToClient(mailRequest: MailRequest) {
      return this.httpClient.post<MailRequest>(`${this.config.apiUrl}api/send/mail`, mailRequest);
    }
}
