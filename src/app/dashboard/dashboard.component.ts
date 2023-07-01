import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { InternService } from '../intern.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  internDetails: any;

  constructor(private router: Router, private internService: InternService) { }

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

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
