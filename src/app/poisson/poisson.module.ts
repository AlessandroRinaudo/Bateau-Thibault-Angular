import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoissonPageRoutingModule } from './poisson-routing.module';

import { PoissonPage } from './poisson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoissonPageRoutingModule
  ],
  declarations: [PoissonPage]
})
export class PoissonPageModule {}
