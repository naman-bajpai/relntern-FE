import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../intern.service';
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'
import { MatDialog } from '@angular/material/dialog';
import  { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { UpdateDialogBodyComponent } from '../update-dialog-body/update-dialog-body.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  internDetails: any;

  constructor(private router: Router, private internService: InternService, private matDialog : MatDialog) { }

  ngOnInit(): void {
    this.getInterns();
    this.deleteIntern(this.internDetails);
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

  // openEdit(id: number): void {
  //   this.matDialog.open(UpdateDialogBodyComponent, {
  //     width: '800px',
  //     height: '700px',
  //     data: { id: id }
  //   });
  // }


  openEdit(intern: any): void {
    console.log(intern);
    this.matDialog.open(UpdateDialogBodyComponent, {
      width: '800px',
      height: '700px',
      data: { intern }
    });
  }

    openDialog() {
      this.matDialog.open(DialogBodyComponent, {
        width: '500px',
        height: '140px'
      });
    }
    closeDialog() {
      this.matDialog.closeAll();
  }

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
