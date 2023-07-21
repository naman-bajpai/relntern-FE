import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  constructor(private router: Router, private internService: InternService) { }
  internDetails: any;
  filteredInterns: any;
  selectedQuarter: string = 'all';
  selectedYear: string = 'all';

  ngOnInit(): void {
    this.getInterns();
  }

  getInterns(): void {
    this.internService.getInterns().subscribe(
      (resp) => {
        console.log(resp);
        this.internDetails = resp;
        this.filterInterns();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // Filter interns based on selected quarter and year
  filterInterns(): void {
    this.filteredInterns = this.internDetails.filter((intern:any) => {
      const quarterMatch = this.selectedQuarter === 'all' || intern.quarter === this.selectedQuarter;
      const yearMatch = this.selectedYear === 'all' || intern.endDate.startsWith(this.selectedYear);
      return quarterMatch && yearMatch;
    });
  }

  // Event listeners for the quarter and year filter dropdowns
  onQuarterFilterChange(): void {
    this.filterInterns();
  }

  onYearFilterChange(): void {
    this.filterInterns();
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
