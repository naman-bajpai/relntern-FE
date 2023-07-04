import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internsuccess',
  templateUrl: './internsuccess.component.html',
  styleUrls: ['./internsuccess.component.css']
})
export class InternsuccessComponent {

  constructor( private router: Router) {}

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
