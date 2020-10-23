import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourteaulinguinePageRoutingModule } from './tourteaulinguine-routing.module';

import { TourteaulinguinePage } from './tourteaulinguine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourteaulinguinePageRoutingModule
  ],
  declarations: [TourteaulinguinePage]
})
export class TourteaulinguinePageModule {}
