import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent implements OnInit {

  friendList:any=[
    {
      "id":1,
      "name":"Osama Elzero",
      "position":"JavaScript Developer",
      "friends":99,
      "projects":15,
      "articles":25,
      "date":"02/10/2021"
    },{
      "id":1,
      "name":"Osama Elzero",
      "position":"JavaScript Developer",
      "friends":99,
      "projects":15,
      "articles":25,
      "date":"02/10/2021"
    },{
      "id":1,
      "name":"Osama Elzero",
      "position":"JavaScript Developer",
      "friends":99,
      "projects":15,
      "articles":25,
      "date":"02/10/2021"
    },{
      "id":1,
      "name":"Osama Elzero",
      "position":"JavaScript Developer",
      "friends":99,
      "projects":15,
      "articles":25,
      "date":"02/10/2021"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
