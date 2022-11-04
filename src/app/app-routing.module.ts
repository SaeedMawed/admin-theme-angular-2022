import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { PlansComponent } from './pages/plans/plans.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path:"",redirectTo:"/dashboard",pathMatch:"full" },
  { path:"dashboard",component:DashboardComponent},
  { path:"setting",component:SettingsComponent},
  { path:"profile",component:ProfileComponent },
  { path:"projects",component:ProjectsComponent },
  { path:"courses",component:CoursesComponent },
  { path:"friends",component:FriendsComponent },
  { path:"files",component:DashboardComponent },
  { path:"plans",component:PlansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
