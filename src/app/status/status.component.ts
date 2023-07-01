import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  
  constructor(private router: Router) { }
  
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
