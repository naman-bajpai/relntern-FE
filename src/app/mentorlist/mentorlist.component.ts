import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MentordeleteComponent } from '../mentordelete/mentordelete.component';

@Component({
  selector: 'app-mentorlist',
  templateUrl: './mentorlist.component.html',
  styleUrls: ['./mentorlist.component.css']
})
export class MentorlistComponent {
  mentorDetails: any;
  constructor(private router: Router , private internService: InternService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getMentor();
  }
  
  getMentor(): void {
    this.internService.getMentor().subscribe(
      (resp) => {
        console.log(resp);
        this.mentorDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }

  openMentorDetete(mentor :any): void {
    this.matDialog.open(MentordeleteComponent, {
      width: '500px',
      height: '140px',
      data: mentor
    });
  }
}
