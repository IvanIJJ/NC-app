import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinuePageRoutingModule } from './continue-routing.module';

import { ContinuePage } from './continue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinuePageRoutingModule
  ],
  declarations: [ContinuePage]
})
export class ContinuePageModule {}
