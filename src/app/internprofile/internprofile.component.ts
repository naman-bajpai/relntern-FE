import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-internprofile',
  templateUrl: './internprofile.component.html',
  styleUrls: ['./internprofile.component.css'],
})
export class InternprofileComponent {
  internProfile: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<InternprofileComponent>) {
    this.internProfile = data;
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
