import { NgModule } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CONFIG, Config } from '../model';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const config: Config = {
  customerLimit: 100,
  apiUrl:  'https://localhost:5001/'
};

@NgModule({
  imports: [RouterModule],
  providers: [
    MessageService,
    {provide: CONFIG, useValue: config},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true}],
  declarations: [ NavbarComponent, NotFoundComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
