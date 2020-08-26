import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/authentication/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      canActivate: [AuthGuardService]

  },
  {
    path: 'locations',
    loadChildren: () => import('./pages/locations/locations.module').then(m => m.LocationsModule),
      canActivate: [AuthGuardService]
   
  },
  {
    path: 'episodes',
    loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesModule),
      canActivate: [AuthGuardService]
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
