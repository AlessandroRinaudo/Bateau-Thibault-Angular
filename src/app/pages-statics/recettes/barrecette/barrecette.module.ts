import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarrecettePageRoutingModule } from './barrecette-routing.module';

import { BarrecettePage } from './barrecette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarrecettePageRoutingModule
  ],
  declarations: [BarrecettePage]
})
export class BarrecettePageModule {}
