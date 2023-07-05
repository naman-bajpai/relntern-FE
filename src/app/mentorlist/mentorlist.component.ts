import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';

@Component({
  selector: 'app-mentorlist',
  templateUrl: './mentorlist.component.html',
  styleUrls: ['./mentorlist.component.css']
})
export class MentorlistComponent {
  mentorDetails: any;
  constructor(private router: Router , private internService: InternService) { }

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
}
