import { Component, OnInit } from '@angular/core';
import { ThemeControllerService } from 'src/app/services/theme-controller.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  toggle:boolean=false;
  constructor(private tc:ThemeControllerService) { }

  ngOnInit(): void {

  }



}
