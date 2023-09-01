import { NgModule } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CONFIG, Config } from '../model';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from '../canActivate-guard.service';
import { SharedModule } from '../shared/shared.module';

const config: Config = {
  customerLimit: 100,
  apiUrl:  'https://localhost:5001/'
};

@NgModule({
  imports: [RouterModule, SharedModule],
  providers: [
    AuthGuard,
    MessageService,
    {provide: CONFIG, useValue: config},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true}],
  declarations: [ NavbarComponent, NotFoundComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
