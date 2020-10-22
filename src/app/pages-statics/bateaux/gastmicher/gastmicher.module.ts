import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastmicherPageRoutingModule } from './gastmicher-routing.module';

import { GastmicherPage } from './gastmicher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastmicherPageRoutingModule
  ],
  declarations: [GastmicherPage]
})
export class GastmicherPageModule {}
