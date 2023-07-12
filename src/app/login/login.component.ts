import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){

  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  checkPassword(password: string) {
    if (password.length < 8) {
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Password is too short');
    }
  }

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}