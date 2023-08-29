import { Component, OnInit } from '@angular/core';
import { MailRequest } from '../model';
import { MailingService } from '../mailing.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-mailing-add',
  templateUrl: './mailing-add.component.html',
  styles: [
  ]
})
export class MailingAddComponent implements OnInit {

    mailRequest: MailRequest = {
    subject: '',
    message: ''
  };

  constructor(private malingService: MailingService, private messageService: MessageService) { }

  ngOnInit() : void {
  }

  sendMailing() {
    this.malingService.sendMailToClient(this.mailRequest).subscribe(response => {
      this.messageService.success("Udało się wysłać mailing")},
      error => this.messageService.error("Nie udało się wysłać mailingu"));
  }

}
