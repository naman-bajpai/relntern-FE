import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-dialog-body',
  templateUrl: './update-dialog-body.component.html',
  styleUrls: ['./update-dialog-body.component.css']
})
export class UpdateDialogBodyComponent {
  internUpdate: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { intern: any }
  ) {
    this.internUpdate = { 
      fullname: data.intern.name,
      email: data.intern.email,
      mentor: data.intern.mentor,
      mentoremail: data.intern.mentoremail,
      projectname: data.intern.projectname,
      projectstatus: data.intern.projectstatus,
      startdate: data.intern.startdate,
      enddate: data.intern.enddate,
      role: data.intern.role,
      association: data.intern.association,
      gradyear: data.intern.gradyear,
      uniname: data.intern.uniname,
      coursename: data.intern.coursename,
      specialization: data.intern.specialization,
     };
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
