import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import  { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-internsuccess',
  templateUrl: './internsuccess.component.html',
  styleUrls: ['./internsuccess.component.css']
})
export class InternsuccessComponent {
  title = 'angular-dialog';
  constructor(private router: Router , private matDialog : MatDialog ) {}
  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
