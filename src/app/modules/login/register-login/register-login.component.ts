import { Component } from '@angular/core';

@Component({
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})

export class RegisterLoginComponent {

  user: any = {
    fullName: '',
    email: '',
    password: null
  }

  onSubmit(form: any){

    console.log(this.user);    
    
  }



}
