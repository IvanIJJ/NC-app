import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadsheddingPageRoutingModule } from './loadshedding-routing.module';

import { LoadsheddingPage } from './loadshedding.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadsheddingPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [LoadsheddingPage]
})
export class LoadsheddingPageModule {}
