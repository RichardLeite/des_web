import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const cadastrarRoutes = [
  {
    path: '',
    component: ProfileComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(cadastrarRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
