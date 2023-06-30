import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
