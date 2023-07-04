import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InternService } from '../intern.service';

@Component({
  selector: 'app-addmentor',
  templateUrl: './addmentor.component.html',
  styleUrls: ['./addmentor.component.css']
})
export class AddmentorComponent {

  constructor(private router:Router, private interService : InternService) { }
  register(registerForm: NgForm) {
    if (registerForm.valid) {
      this.interService.registerMentor(registerForm.value).subscribe(
        (resp: any) => {
          console.log(resp);
          registerForm.resetForm();
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
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
 
}
