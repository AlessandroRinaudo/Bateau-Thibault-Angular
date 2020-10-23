import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistrotlandaisPageRoutingModule } from './bistrotlandais-routing.module';

import { BistrotlandaisPage } from './bistrotlandais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistrotlandaisPageRoutingModule
  ],
  declarations: [BistrotlandaisPage]
})
export class BistrotlandaisPageModule {}
