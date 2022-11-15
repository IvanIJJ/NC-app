import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunicipalityPage } from './municipality.page';

const routes: Routes = [
  {
    path: '',
    component: MunicipalityPage
  },
  {
    path: 'accounts-services',
    loadChildren: () => import('./accounts-services/accounts-services.module').then( m => m.AccountsServicesPageModule)
  },
  {
    path: 'loadshedding',
    loadChildren: () => import('./loadshedding/loadshedding.module').then( m => m.LoadsheddingPageModule)
  },
  {
    path: 'reporting',
    loadChildren: () => import('./reporting/reporting.module').then( m => m.ReportingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunicipalityPageRoutingModule {}
