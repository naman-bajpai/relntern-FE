import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { Router } from '@angular/router';
import { AddmentorComponent } from './addmentor/addmentor.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: AddComponent } ,
  { path: 'list', component: ListComponent },
  { path: 'addmentor', component: AddmentorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router:Router){

  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
