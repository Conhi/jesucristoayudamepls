import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: "",    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: ":homeId",
        loadChildren: () => import('./alarma/alarma.module').then(m => m.AlarmaPageModule)
      }

    ]

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alarma',
    loadChildren: () => import('./alarma/alarma.module').then( m => m.AlarmaPageModule)
  },
  {
    path: 'sync',
    loadChildren: () => import('./sync/sync.module').then( m => m.SyncPageModule)
  },
  {
    path: 'incursiones',
    loadChildren: () => import('./incursiones/incursiones.module').then( m => m.IncursionesPageModule)
  },
  {
    path: 'crearalarma',
    loadChildren: () => import('./alarma/crearalarma/crearalarma.module').then( m => m.CrearalarmaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)