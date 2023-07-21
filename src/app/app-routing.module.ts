import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { Router } from '@angular/router';
import { AddmentorComponent } from './addmentor/addmentor.component';
import { StatusComponent } from './status/status.component';
import { InactiveComponent } from './inactive/inactive.component';
import { InternsuccessComponent } from './internsuccess/internsuccess.component';
import { MentorlistComponent } from './mentorlist/mentorlist.component';
import { InternprofileComponent } from './internprofile/internprofile.component';
import { MentordashboardComponent } from './mentordashboard/mentordashboard.component';
import { InterndashboardComponent } from './interndashboard/interndashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'addmentor', component: AddmentorComponent },
  { path: 'status', component: StatusComponent },
  { path: 'inactive', component: InactiveComponent },
  { path: 'internsuccess', component: InternsuccessComponent },
  { path: 'mentorlist', component: MentorlistComponent },
  { path: 'internprofile', component: InternprofileComponent },
  { path: 'mentordashboard', component: MentordashboardComponent },
  { path: 'interndashboard', component: InterndashboardComponent },
  { path: 'schedule', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {

  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
