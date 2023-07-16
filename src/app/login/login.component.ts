import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  checkPassword(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.goToPage('dashboard');

    } else if (username === 'mentor' && password === 'mentor') {
      this.goToPage('mentordashboard');
    }
    else if (username === 'intern' && password === 'intern') {
      this.goToPage('mentordashboard');
    }
    else {
      console.log('Invalid username or password');
    }
  }

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
