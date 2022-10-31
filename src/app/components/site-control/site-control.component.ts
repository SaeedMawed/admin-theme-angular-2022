import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-control',
  templateUrl: './site-control.component.html',
  styleUrls: ['./site-control.component.scss']
})
export class SiteControlComponent implements OnInit {

  checked:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCheck(){
    this.checked = !this.checked;
  }
}
