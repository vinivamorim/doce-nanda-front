import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './home-login/home-login.component';
import { RegisterLoginComponent } from './register-login/register-login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLoginComponent
  },
  {
    path: 'register',
    component: RegisterLoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
