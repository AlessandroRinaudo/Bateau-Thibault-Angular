import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BistrotdusommelierPage } from './bistrotdusommelier.page';

const routes: Routes = [
  {
    path: '',
    component: BistrotdusommelierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BistrotdusommelierPageRoutingModule {}
