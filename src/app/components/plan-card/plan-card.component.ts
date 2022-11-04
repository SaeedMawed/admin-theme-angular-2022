import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {

  planList:any=[
    {
      "id":"1",
      "title":"Free",
      "price":"0.00",
      "AccessAllTextLessons":true,
        "AccessAllVideosLessons":true,
        "AppearOnLeaderboard":true,
        "BrowseContentWithoutAds":false,
        "AccessAllAssignments":false,
        "GetDailyPrizes":false,
        "EarnCertificate":false,
        "SpaceForHostingFiles":false,
        "AccessBadgeSystem":false
    },{
      "id":"2",
      "title":"Basic",
      "price":"7.99",
      "AccessAllTextLessons":true,
        "AccessAllVideosLessons":true,
        "AppearOnLeaderboard":true,
        "BrowseContentWithoutAds":true,
        "AccessAllAssignments":true,
        "GetDailyPrizes":true,
        "EarnCertificate":false,
        "SpaceForHostingFiles":false,
        "AccessBadgeSystem":false
    },{
      "id":"3",
      "title":"Premium",
      "price":"19.99",
      "AccessAllTextLessons":true,
        "AccessAllVideosLessons":true,
        "AppearOnLeaderboard":true,
        "BrowseContentWithoutAds":true,
        "AccessAllAssignments":true,
        "GetDailyPrizes":true,
        "EarnCertificate":true,
        "SpaceForHostingFiles":true,
        "AccessBadgeSystem":true
    }
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.planList)
  }

}
