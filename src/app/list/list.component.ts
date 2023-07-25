import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { UpdateDialogBodyComponent } from '../update-dialog-body/update-dialog-body.component';
import { InternprofileComponent } from '../internprofile/internprofile.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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

  deleteIntern(interns: { id: any; }) {
    this.internService.deleteIntern(interns.id).subscribe(
      (resp) => {
        console.log(resp);
        this.internDetails = resp;
      },
      (err) => console.log(err)
    );
  }

  openEdit(intern: any): void {
    console.log(intern);
    this.matDialog.open(UpdateDialogBodyComponent, {
      width: '800px',
      height: '700px',
      data: { intern }
    });
  }

  openDialog(intern: any): void {
    this.matDialog.open(DialogBodyComponent, {
      width: '500px',
      height: '140px',
      data: intern
    });
  }

  moveToInactive(intern: any) {
  this.internService.moveToInactive(intern.id).subscribe(
    () => {
      console.log('Intern moved to inactive interns successfully.');
      this.router.navigate(['/'], { skipLocationChange: true }).then(() => this.router.navigate(['/list']));

      // Remove the intern from the internDetails array
      this.internDetails = this.internDetails.filter((item: any) => item.id !== intern.id);
    },
    (error) => {
      console.log('Error moving intern to inactive interns:', error);
    }
  );
}


  closeDialog() {
    this.matDialog.closeAll();
  }

  openProfile(intern: any): void {
    this.matDialog.open(InternprofileComponent, {
      width: '600px',
      height: '600px',
      data: intern,
    });
  }

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
  refresh(): void {
    window.location.reload();
  }
}


