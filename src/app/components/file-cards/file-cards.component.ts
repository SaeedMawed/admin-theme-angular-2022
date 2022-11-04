import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-cards',
  templateUrl: './file-cards.component.html',
  styleUrls: ['./file-cards.component.scss']
})
export class FileCardsComponent implements OnInit {

  files:any=[
    {
      "id":1,
      "title":"my-file.pdf",
      "author":"Elzero",
      "date":"20/06/2020",
      "size":5.5,
      "path":"pdf"
    },{
      "id":2,
      "title":"my-file.avi",
      "author":"Admin",
      "date":"16/5/2021",
      "size":12.5,
      "path":"avi"
    }
    ,{
      "id":3,
      "title":"my-file.eps",
      "author":"Uploader",
      "date":"16/5/2021",
      "size":12.7,
      "path":"eps"
    }
    ,{
      "id":4,
      "title":"my-file.psd",
      "author":"Osama",
      "date":"16/5/2021",
      "size":15.1,
      "path":"psd"
    },{
      "id":5,
      "title":"my-file.dll",
      "author":"Coder",
      "date":"1/9/2021",
      "size":2.2,
      "path":"dll"
    },{
      "id":6,
      "title":"my-file.png",
      "author":"Designer",
      "date":"11/2/2022",
      "size":1.1,
      "path":"png"
    },{
      "id":7,
      "title":"my-sql.sql",
      "author":"Backend ",
      "date":"11/3/2022",
      "size":3.1,
      "path":"sql"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
