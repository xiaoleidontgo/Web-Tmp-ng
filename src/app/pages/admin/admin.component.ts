import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isCollapsed = false;
  winHeight = 0;

  constructor() { }

  ngOnInit() {
    this.winHeight = window.innerHeight;
  }

}
