import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { CustomersModule } from './customers/customers.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MailingModule } from './mailing/mailing.module';

const routes: Routes = [
  {path: '', redirectTo: 'browser', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //ten moduł powinien być tylko w głownym module, ponieważ rejestruje usuługi, a usługi powinny byc rejestrowane tylko raz
    CoreModule, 
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CustomersModule,
    VehiclesModule,
    MailingModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }