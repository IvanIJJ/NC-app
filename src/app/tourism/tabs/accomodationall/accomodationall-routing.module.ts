import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccomodationallPage } from './accomodationall.page';

const routes: Routes = [
  {
    path: '',
    component: AccomodationallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccomodationallPageRoutingModule {}
