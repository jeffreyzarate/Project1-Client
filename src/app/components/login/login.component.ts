import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginserviceService, private router: Router) { }

  username = '';
  password = '';
  loginResponse: Subscription;
  lastStatus = 200;

  ngOnInit() {
    this.loginResponse = this.loginService.$loginStatus.subscribe(status => {
      if (status === 200) {
        this.router.navigateByUrl('welcomecomponent');
      } else {
        alert('Username or password is incorrect.');
        this.lastStatus = status;
      }
    });
  }

  ngOnDestroy() {
    if (this.loginResponse) {
      this.loginResponse.unsubscribe();
    }
  }

  formValidation(): boolean {
    return this.username.length > 0 && this.password.length > 0;
  }

  submit() {
    this.loginService.login(this.username, this.password);
  }
}

