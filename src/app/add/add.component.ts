import { Component } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  registerForm: FormGroup;

  constructor(
    private internService: InternService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mentor: ['', Validators.required],
      mentoremail: ['', Validators.required],
      projectname: ['', Validators.required],
      projectstatus: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      role: [''],
      association: ['', Validators.required],
      gradyear: ['', Validators.required],
      uniname: ['', Validators.required],
      coursename: ['', Validators.required],
      specialization: ['', Validators.required]
    });
  }

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
