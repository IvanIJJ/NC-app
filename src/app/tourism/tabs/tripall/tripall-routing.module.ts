import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripallPage } from './tripall.page';

const routes: Routes = [
  {
    path: '',
    component: TripallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripallPageRoutingModule {}
