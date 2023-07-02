import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  
  constructor(private internService: InternService, private router:Router) {
    // this.registerForm = this.fb.group({
    //   internID: ['', Validators.required], // Add the validators here
    //   fullName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]], // Multiple validators can be applied using an array
    //   mentor: ['', Validators.required],
    //   mentorEmail: ['', [Validators.required, Validators.email]],
    //   projectname: ['', Validators.required],
    //   projectstatus: ['', Validators.required],
    //   startDate: ['', Validators.required],
    //   endDate: ['', Validators.required],
    //   role: ['', Validators.required],
    //   association: ['', Validators.required]
    // });
  }

  register(registerForm: FormGroup) {
    this.internService.registerIntern(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

 

  cancel() {
    this.router.navigate(['/home']);
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
