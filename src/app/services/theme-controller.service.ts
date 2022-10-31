import { Injectable } from '@angular/core';
import { SidebarComponent } from '../layouts/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class ThemeControllerService {

  toggle_btn:boolean=false;
  constructor() { }

  toggleSidebar(){
    this.toggle_btn = !this.toggle_btn;
  }
  getToggle(){
    return this.toggle_btn;
  }
}
