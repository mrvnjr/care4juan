import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 

})
export class HomeComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  collapsed() {
    this.isCollapsed = this.isCollapsed ? false : true;
  }
}
