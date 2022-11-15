import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestuarantsPage } from './restuarants.page';

const routes: Routes = [
  {
    path: '',
    component: RestuarantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestuarantsPageRoutingModule {}
