import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanModuleLoadGuard } from './can-module-load.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'immino',
    pathMatch: 'full',
  },
  {
    path: 'immino',
    loadChildren: () => import('./immino/immino.module').then(m => m.ImminoModule),
    canLoad: [CanModuleLoadGuard]
  },
  {
    path: 'globulin',
    loadChildren: () => import('./globulin/globulin.module').then(m => m.GlobulinModule),
    canLoad: [CanModuleLoadGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
