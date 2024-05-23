import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-regirest',
  templateUrl: './regirest.component.html',
  styleUrls: ['./regirest.component.css']
})
export class RegisterComponent {
    username: string = '';
    passvord: string = '';

  constructor(private authService: AuthService){}

 regirest(): void{

 }

  
}
