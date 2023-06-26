import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private internService: InternService, private router:Router) {
   
  }

  register(registerForm: FormGroup) {
    this.internService.registerIntern(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
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
