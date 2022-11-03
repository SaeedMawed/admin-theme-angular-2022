import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ContentComponent } from './layouts/content/content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WelcomeBoxComponent } from './components/welcome-box/welcome-box.component';
import { QuickDraftComponent } from './components/quick-draft/quick-draft.component';
import { YearlyTargetsComponent } from './components/yearly-targets/yearly-targets.component';
import { TicketsStatisticsComponent } from './components/tickets-statistics/tickets-statistics.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { LatestTasksComponent } from './components/latest-tasks/latest-tasks.component';
import { TopSearchItemComponent } from './components/top-search-item/top-search-item.component';
import { LatestUploadComponent } from './components/latest-upload/latest-upload.component';
import { LastProjectProgressComponent } from './components/last-project-progress/last-project-progress.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { LatestPostComponent } from './components/latest-post/latest-post.component';
import { SocialMediaStatsComponent } from './components/social-media-stats/social-media-stats.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SiteControlComponent } from './components/site-control/site-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { SecurityInfoComponent } from './components/security-info/security-info.component';
import { SocialInfoComponent } from './components/social-info/social-info.component';
import { WidgetsControlComponent } from './components/widgets-control/widgets-control.component';
import { BackupManagerComponent } from './components/backup-manager/backup-manager.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileMainCardComponent } from './components/profile-main-card/profile-main-card.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LatestActivitiesComponent } from './components/latest-activities/latest-activities.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    DashboardComponent,
    WelcomeBoxComponent,
    QuickDraftComponent,
    YearlyTargetsComponent,
    TicketsStatisticsComponent,
    LatestNewsComponent,
    LatestTasksComponent,
    TopSearchItemComponent,
    LatestUploadComponent,
    LastProjectProgressComponent,
    RemindersComponent,
    LatestPostComponent,
    SocialMediaStatsComponent,
    SettingsComponent,
    SiteControlComponent,
    GeneralInfoComponent,
    SecurityInfoComponent,
    SocialInfoComponent,
    WidgetsControlComponent,
    BackupManagerComponent,
    ProfileComponent,
    ProfileMainCardComponent,
    SkillsComponent,
    LatestActivitiesComponent,
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
