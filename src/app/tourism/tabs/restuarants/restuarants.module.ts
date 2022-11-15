import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestuarantsPageRoutingModule } from './restuarants-routing.module';

import { RestuarantsPage } from './restuarants.page';
import { SharedDirectivesModule } from '../../../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestuarantsPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [RestuarantsPage]
})
export class RestuarantsPageModule {}
