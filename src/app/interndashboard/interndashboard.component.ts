import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interndashboard',
  templateUrl: './interndashboard.component.html',
  styleUrls: ['./interndashboard.component.css']
})
export class InterndashboardComponent {
  constructor(private router: Router) { 

  }
  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
