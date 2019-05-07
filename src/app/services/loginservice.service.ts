import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): void {
    const payload = {
      username: username,
      password: password
    };

    this.httpClient.post('http://localhost:8080/ERSApp/main', payload, {
      observe: 'response'
      })
      .subscribe(response => {
        sessionStorage.setItem('cache', response.body.toString());
        this.loginStatusSubject.next(200);
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
}