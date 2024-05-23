import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string = '';
    passvord: string = '';

  constructor(private authService: AuthService){}

 login(): void{
    
 }

  
}
