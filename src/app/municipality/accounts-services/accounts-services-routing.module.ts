import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsServicesPage } from './accounts-services.page';

const routes: Routes = [
  {
    path: '',
    component: AccountsServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsServicesPageRoutingModule {}
