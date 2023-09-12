import { Component } from '@angular/core';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})

export class HomeLoginComponent {

  user: any = {
    email: '',
    password: null
  }

  onSubmit(form: any){
    console.log(this.user);
    console.log(this.user.email.valid);
        
  }

}

