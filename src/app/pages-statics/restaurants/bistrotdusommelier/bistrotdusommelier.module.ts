import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistrotdusommelierPageRoutingModule } from './bistrotdusommelier-routing.module';

import { BistrotdusommelierPage } from './bistrotdusommelier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistrotdusommelierPageRoutingModule
  ],
  declarations: [BistrotdusommelierPage]
})
export class BistrotdusommelierPageModule {}
