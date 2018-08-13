import { CustomerDataService } from './customer-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ CustomerDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
