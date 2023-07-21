import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { InternService } from '../intern.service';
import { InternprofileComponent } from '../internprofile/internprofile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  internDetails: any;

  constructor(private router: Router, private internService: InternService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getInterns();
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

  openDialog(intern: any): void {
    this.matDialog.open(InternprofileComponent, {
      width: '600px',
      height: '600px',
      data: intern,
    });
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
