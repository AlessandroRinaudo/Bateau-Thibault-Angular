import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomardenchaudFroidPage } from './homardenchaud-froid.page';

const routes: Routes = [
  {
    path: '',
    component: HomardenchaudFroidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomardenchaudFroidPageRoutingModule {}
