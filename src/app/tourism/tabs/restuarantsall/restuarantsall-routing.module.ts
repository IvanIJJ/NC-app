import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestuarantsallPage } from './restuarantsall.page';

const routes: Routes = [
  {
    path: '',
    component: RestuarantsallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestuarantsallPageRoutingModule {}
