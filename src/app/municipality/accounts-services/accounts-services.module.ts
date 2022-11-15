import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsServicesPageRoutingModule } from './accounts-services-routing.module';

import { AccountsServicesPage } from './accounts-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountsServicesPageRoutingModule
  ],
  declarations: [AccountsServicesPage]
})
export class AccountsServicesPageModule {}
