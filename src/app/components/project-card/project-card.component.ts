import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  porjectList:any=[
    {"id":1,
    "date":"15/10/2022",
    "title":"Elzero Dashboard",
    "desc":"Elzero Dashboard Project Design And Programming And Hosting",
    "team":[1,2,3,4,5],
    "tasks": ["Programming","Design","Hosting","Marketing"],
    "progress":53,
    "budget":2500
    },
    {"id":2,
    "date":"10/9/2022",
    "title":"MyShop",
    "desc":"MyShop Project Design And Programming And Hosting",
    "team":[3],
    "tasks": ["Programming","Design","Hosting","Marketing"],
    "progress":95,
    "budget":1500
    },
    {"id":3,
    "date":"25/7/2021",
    "title":"Talabat App",
    "desc":"Talabat  Project Developing",
    "team":[1 , 3 , 4 ,1,4,3],
    "tasks": ["Programming","Testing"],
    "progress":20,
    "budget":60000
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
