import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutserviceService {

  constructor() { }
  logalert()
  {
    alert('You have logged out.');
    this.deleteSession();
  }
  deleteSession()
  {
    sessionStorage.removeItem('cache');
  }
}
