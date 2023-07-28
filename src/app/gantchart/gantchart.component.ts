import { Component, OnInit } from '@angular/core';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gantchart',
  templateUrl: './gantchart.component.html',
  styleUrls: ['./gantchart.component.css']
})
export class GantchartComponent implements OnInit {
  // Define the data and resources as class properties
  public data: Object[] = []; // Initialize an empty array to store Gantt chart data

  // Gantt chart properties
  public taskFields: any = {
    id: 'taskId',
    name: 'taskName',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  public labelSettings: any = {
    rightLabel: 'taskName'
  };

  public timelineSettings: any = {
    timelineUnit: 'Month', // Set the unit for the visible timeline to 'Month'
    timelineStartDate: new Date('2023-07-01'), // Set the start date of the visible timeline
    timelineEndDate: new Date('2100-12-31') // Set the end date of the visible timeline
  };

  public columns: any = [
    { field: 'id', headerText: 'Intern ID' },
    { field: 'taskName', headerText: 'Intern Name' },
    { field: 'startDate', headerText: 'Start Date' },
    { field: 'endDate', headerText: 'End Date' }
    // Add more columns as needed for other properties
  ];

  constructor(private internService: InternService , private router: Router) { }

  ngOnInit(): void {
    this.loadGanttData();
  }

  private loadGanttData(): void {
    this.internService.getInterns().subscribe((interns: any) => {
      this.data = interns.map((intern: { id: any; fullname: any; startDate: any; endDate: any; }) => {
        return {
          taskId: intern.id, // Assuming the property name is 'id'
          taskName: intern.fullname, // Assuming the property name is 'fullname'
          startDate: intern.startDate,
          endDate: intern.endDate
        };
      });
    });
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
