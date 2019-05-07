import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcomescreen',
  templateUrl: './welcomescreen.component.html',
  styleUrls: ['./welcomescreen.component.css']
})
export class WelcomescreenComponent implements OnInit {

  splitCache = sessionStorage.getItem('cache').split(' ');
  name = this.splitCache[2] + ' ' + this.splitCache[3];
  roleId = this.splitCache[1];
  userId = this.splitCache[0];
  position = this.roleId === '1' ? 'Financial Manager' : 'Employee';

  constructor() { }


  ngOnInit() {
  }

}
