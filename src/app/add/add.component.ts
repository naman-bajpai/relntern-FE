import { Component } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { InvalidDialogComponent } from '../invalid-dialog/invalid-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  registerForm: FormGroup;
  internDetails: any;
  mentors: any;


  ngOnInit(): void {
    this.getInterns();
    this.getMentors();
  }

  constructor(
    private internService: InternService,
    private router: Router,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog
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


  getMentors(): void {
    this.internService.getMentor().subscribe(
      (resp) => { // Assuming the response is an array of Mentor objects
        console.log(resp);
        this.mentors = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  

  getInterns(): void {
    this.internService.getInterns().subscribe(
      (resp) => {
        console.log(resp);
        this.internDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['/home']);
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
