import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elzero-admin-theme';
  innerWidth:any;
  opened=true;
  mode=true;

  ngOnInit(): void {
    if(window.innerWidth < 993){
      this.opened =false;
      this.mode=false;
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event:any): void {
  this.innerWidth = window.innerWidth;
  if(this.innerWidth > 992){
    this.opened= true;
    this.mode=true;
  }
  else {
    if (this.opened=true){
      this.opened=false;
      this.mode=false;
    }
  }
}
}
