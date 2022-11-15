import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadsheddingPage } from './loadshedding.page';

const routes: Routes = [
  {
    path: '',
    component: LoadsheddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadsheddingPageRoutingModule {}
