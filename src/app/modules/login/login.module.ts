import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLoginComponent } from './home-login/home-login.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeLoginComponent,
    RegisterLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule
  ]
})

export class LoginModule { }
