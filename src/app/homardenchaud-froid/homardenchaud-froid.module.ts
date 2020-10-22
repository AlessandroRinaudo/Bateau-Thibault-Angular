import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomardenchaudFroidPageRoutingModule } from './homardenchaud-froid-routing.module';

import { HomardenchaudFroidPage } from './homardenchaud-froid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomardenchaudFroidPageRoutingModule
  ],
  declarations: [HomardenchaudFroidPage]
})
export class HomardenchaudFroidPageModule {}
