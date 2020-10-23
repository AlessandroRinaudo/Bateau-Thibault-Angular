import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarrecettePage } from './barrecette.page';

const routes: Routes = [
  {
    path: '',
    component: BarrecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarrecettePageRoutingModule {}
