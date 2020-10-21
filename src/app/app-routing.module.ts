import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
<<<<<<< HEAD
  {
    path: 'vue2',
    loadChildren: () => import('./vue2/vue2.module').then( m => m.Vue2PageModule)
  },
=======

  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  
>>>>>>> cd088798d2c680382f00824cd38fead126f08228
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
