import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/styles/login.component.css']
})
export class LoginComponent {
    username: string = '';
    passvord: string = '';

  constructor(private authService: AuthService){}

 login(): void{
    if(this.authService.login(this.username, this.passvord)){
   
    }
 }

  
}
