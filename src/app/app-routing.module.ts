import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Authenticated } from './services/guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign',
    pathMatch: 'full',
  },
  { path: 'sign', component: SignInComponent },
  {
    path: 'profile',
    canActivate: [Authenticated],
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
