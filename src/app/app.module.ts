import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    SocialMediaStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SidebarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
