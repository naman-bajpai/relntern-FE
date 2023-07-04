import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private internService: InternService, private router: Router) {}

  register(registerForm: NgForm) {
    if (registerForm.valid) {
      this.internService.registerIntern(registerForm.value).subscribe(
        (resp: any) => {
          console.log(resp);
          registerForm.resetForm();
          this.router.navigate(['/internsuccess']);
        },
        (err: any) => {
          console.log(err);
        }
      );
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }

  cancel() {
    this.router.navigate(['/home']);
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
