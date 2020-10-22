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
  {
    path: 'vue2',
    loadChildren: () => import('./vue2/vue2.module').then( m => m.Vue2PageModule)
  },

  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'restaurent',
    loadChildren: () => import('./restaurent/restaurent.module').then( m => m.RestaurentPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'dela-brise',
    loadChildren: () => import('./pages-statics/dela-brise/dela-brise.module').then( m => m.DelaBrisePageModule)
  },

  {
    path: 'homardenchaud-froid',
    loadChildren: () => import('./pages-statics/homardenchaud-froid/homardenchaud-froid.module').then( m => m.HomardenchaudFroidPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
