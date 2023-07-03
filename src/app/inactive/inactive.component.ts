import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent {

    constructor(private router: Router) { 

    }
    goToPage(pageName: string): void {
      this.router.navigate([pageName]);
    }
}
