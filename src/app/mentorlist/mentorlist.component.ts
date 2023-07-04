import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mentorlist',
  templateUrl: './mentorlist.component.html',
  styleUrls: ['./mentorlist.component.css']
})
export class MentorlistComponent {
  constructor(private router: Router) {
    
  }

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
