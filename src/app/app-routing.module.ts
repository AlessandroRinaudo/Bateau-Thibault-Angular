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
    path: 'recettes/homardenchaud-froid',
    loadChildren: () => import('./pages-statics/homardenchaud-froid/homardenchaud-froid.module').then( m => m.HomardenchaudFroidPageModule)
  },
  {
    path: 'saphir',
    loadChildren: () => import('./pages-statics/bateaux/saphir/saphir.module').then( m => m.SaphirPageModule)
  },
  {
    path: 'gastmicher',
    loadChildren: () => import('./pages-statics/bateaux/gastmicher/gastmicher.module').then( m => m.GastmicherPageModule)
  },
  {
    path: 'aquilon',
    loadChildren: () => import('./pages-statics/bateaux/aquilon/aquilon.module').then( m => m.AquilonPageModule)
  },
  {
    path: 'bistrotdesgascons',
    loadChildren: () => import('./pages-statics/restaurants/bistrotdesgascons/bistrotdesgascons.module').then( m => m.BistrotdesgasconsPageModule)
  },
  {
    path: 'lesfousdelile',
    loadChildren: () => import('./pages-statics/restaurants/lesfousdelile/lesfousdelile.module').then( m => m.LesfousdelilePageModule)
  },
  {
    path: 'bistrotlandais',
    loadChildren: () => import('./pages-statics/restaurants/bistrotlandais/bistrotlandais.module').then( m => m.BistrotlandaisPageModule)
  },
  {
    path: 'villa9trois',
    loadChildren: () => import('./pages-statics/restaurants/villa9trois/villa9trois.module').then( m => m.Villa9troisPageModule)
  },
  {
    path: 'bistrotdusommelier',
    loadChildren: () => import('./pages-statics/restaurants/bistrotdusommelier/bistrotdusommelier.module').then( m => m.BistrotdusommelierPageModule)
  },
  {
    path: 'recettes/saintjacques',
    loadChildren: () => import('./pages-statics/recettes/saintjacques/saintjacques.module').then( m => m.SaintjacquesPageModule)
  },
  {
    path: 'recettes/barrecette',
    loadChildren: () => import('./pages-statics/recettes/barrecette/barrecette.module').then( m => m.BarrecettePageModule)
  },
  {
    path: 'recettes/tourteaulinguine',
    loadChildren: () => import('./pages-statics/recettes/tourteaulinguine/tourteaulinguine.module').then( m => m.TourteaulinguinePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
