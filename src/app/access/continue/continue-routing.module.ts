import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinuePage } from './continue.page';

const routes: Routes = [
  {
    path: '',
    component: ContinuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinuePageRoutingModule {}
