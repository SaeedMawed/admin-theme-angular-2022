import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-info',
  templateUrl: './security-info.component.html',
  styleUrls: ['./security-info.component.scss']
})
export class SecurityInfoComponent implements OnInit {

  checked:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCheck(){
    this.checked = !this.checked;
  }
}
