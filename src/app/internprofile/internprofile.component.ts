import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internprofile',
  templateUrl: './internprofile.component.html',
  styleUrls: ['./internprofile.component.css']
})
export class InternprofileComponent {
  constructor(private router: Router) {
    
   }

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
