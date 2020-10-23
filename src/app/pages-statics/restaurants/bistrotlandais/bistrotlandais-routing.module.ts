import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BistrotlandaisPage } from './bistrotlandais.page';

const routes: Routes = [
  {
    path: '',
    component: BistrotlandaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BistrotlandaisPageRoutingModule {}
