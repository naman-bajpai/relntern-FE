import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InternService } from '../intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {
  internDetails: any;

  constructor(private matDialog: MatDialog, private internService: InternService, private router: Router) { }

  ngOnInit(): void {
    // Retrieve the internDetails before deleting
    this.internService.getInterns().subscribe(
      (resp) => {
        this.internDetails = resp;
      },
      (err) => console.log(err)
    );
  }

  deleteIntern(intern: any) {
    this.internService.deleteIntern(intern.id).subscribe(
      (resp) => {
        console.log(resp);
        // Update the internDetails after deleting
        this.internDetails = this.internDetails.filter((i: any) => i.id !== intern.id);
        this.closeDialog();
        this.router.navigate(['/'], {skipLocationChange: true}).then(() => this.router.navigate(['/list']));

      },
      (err) => console.log(err)
    );
  }
  
  closeDialog() {
    this.matDialog.closeAll();
  }
}
