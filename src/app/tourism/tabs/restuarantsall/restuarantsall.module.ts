import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestuarantsallPageRoutingModule } from './restuarantsall-routing.module';

import { RestuarantsallPage } from './restuarantsall.page';
import { SharedDirectivesModule } from '../../../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestuarantsallPageRoutingModule,
    SharedDirectivesModule,
  ],
  declarations: [RestuarantsallPage]
})
export class RestuarantsallPageModule {}
