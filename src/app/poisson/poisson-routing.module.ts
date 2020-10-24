import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoissonPage } from './poisson.page';

const routes: Routes = [
  {
    path: '',
    component: PoissonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoissonPageRoutingModule {}
