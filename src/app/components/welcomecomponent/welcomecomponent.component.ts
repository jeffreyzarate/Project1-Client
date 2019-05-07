import { Component, OnInit } from '@angular/core';
import { LogoutserviceService } from 'src/app/services/logoutservice.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-welcomecomponent',
  templateUrl: './welcomecomponent.component.html',
  styleUrls: ['./welcomecomponent.component.css']
})
export class WelcomecomponentComponent implements OnInit {

  splitCache = sessionStorage.getItem('cache').split(' ');
  roleId = Number(this.splitCache[1]);

  constructor(private logoutService: LogoutserviceService, private router: Router) { }

  ngOnInit() {
  }
  isRegular() {
    return this.roleId === 2;
  }
  logout(){
    this.logoutService.logalert();
    this.router.navigate(['../login']);
  }
}
