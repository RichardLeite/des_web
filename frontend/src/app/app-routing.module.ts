import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guardas/auth.guard';
import { NotFoundComponent } from './modulos/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'home',
    loadChildren: () => import('./modulos/home/home.module').then(modeule => modeule.HomeModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modulos/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./modulos/cadastrar/cadastrar.module').then(module => module.CadastrarModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modulos/profile/profile.module').then(module => module.ProfileModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
