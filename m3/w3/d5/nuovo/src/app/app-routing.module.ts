import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [

  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule), 
    canActivate: [LoginGuardGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "**",
    redirectTo: "login"
  }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
