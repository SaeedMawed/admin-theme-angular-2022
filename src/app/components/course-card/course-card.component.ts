import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  courseList:any=[
    {
      "id":1,
      "engineer_id":"1",
      "title":"Mastering Web Design",
      "desc":"Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture ",
      "subscriber":950,
      "price":165
    },
    {
      "id":2,
      "engineer_id":"2",
      "title":"Data Structure And Algorithms",
      "desc":"Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints ",
      "subscriber":650,
      "price":290
    },
    {
      "id":3,
      "engineer_id":"3",
      "title":"Responsive Web Design",
      "desc":"Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints ",
      "subscriber":850,
      "price":250
    },
    {
      "id":4,
      "engineer_id":"4",
      "title":"Mastering Python",
      "desc":"Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life ",
      "subscriber":850,
      "price":250
    },
    {
      "id":5,
      "engineer_id":"5",
      "title":"PHP Examples",
      "desc":"PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases ",
      "subscriber":820,
      "price":150
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
