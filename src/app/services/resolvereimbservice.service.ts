import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReimbRequest } from 'src/app/models/reimbrequest';

@Injectable({
  providedIn: 'root'
})
export class ResolvereimbserviceService {

  private resolveStatusSubject = new Subject<number>();
  public  $resolveStatus = this.resolveStatusSubject.asObservable();
  public requests = new Array <ReimbRequest>();

  constructor(private httpClient: HttpClient) { }

  retrieveRequests(userId: number, roleId: number) {
    const payload = {
      id: userId,
      roleId: roleId
    };
    this.httpClient.post('http://localhost:8080/ERSApp/resolve', payload, {
      observe: 'response'
      }).pipe(map(response => response.body)
      ).subscribe(response => {
        this.resolveStatusSubject.next(200);
        response.forEach(element => {
          this.requests.push(element);
        });
      }, err => {
        this.resolveStatusSubject.next(err.status);
      });
  }

  resolveRequest(userId: number, requestId: number, statusId: number)
  {
    const payload = {
      id: requestId,
      resolverId: userId,
      statusId: statusId
    };
    this.httpClient.put('http://localhost:8080/ERSApp/resolve', payload, {
    observe: 'response'
    }).subscribe(response => {
      this.resolveStatusSubject.next(200);
    }, err => {
      this.resolveStatusSubject.next(err.status);
    });
  }
}
