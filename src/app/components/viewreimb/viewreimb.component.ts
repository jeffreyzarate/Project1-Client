import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ReimbRequest } from 'src/app/models/reimbrequest';

@Component({
  selector: 'app-viewreimb',
  templateUrl: './viewreimb.component.html',
  styleUrls: ['./viewreimb.component.css']
})
export class ViewreimbComponent implements OnInit {

  private viewStatusSubject = new Subject<number>();
  public  $viewStatus = this.viewStatusSubject.asObservable();
  requests = new Array <ReimbRequest>();
  allrequests = new Array <ReimbRequest>() ;
  pendingrequests = new Array <ReimbRequest>();
  approvedrequests = new Array <ReimbRequest>();
  deniedrequests = new Array <ReimbRequest>();
  active = new Array <ReimbRequest>();
  splitCache = sessionStorage.getItem('cache').split(' ');
  roleId = Number(this.splitCache[1]);
  userId = Number(this.splitCache[0]);
  response: Subscription;
  lastStatus = 200;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.retrieveRequests(this.userId, this.roleId);
    this.response = this.$viewStatus.subscribe(status => {
      if (status === 200) {
      } else {
        this.lastStatus = status;
      }
    });

  }
  ngOnDestroy() {
    if (this.response) {
      this.response.unsubscribe();
    }
  }

  retrieveRequests(userId: number, roleId: number){
    const payload = {
      id: userId,
      roleId: roleId
    };
    this.httpClient.post('http://localhost:8080/ERSApp/retrieve', payload, {
      observe: 'response'
      }).pipe(map(response => response.body)
      ).subscribe(response => {
        this.viewStatusSubject.next(200);
        response.forEach(element => {
          this.requests.push(element);
        });
        this.allrequests = this.requests;
        this.active = this.allrequests;
        this.instantiate();
      }, err => {
        this.viewStatusSubject.next(err.status);
      });
  }

  instantiate() {
    this.requests.forEach(request => {
      if (request.statusId === 1) {
        this.pendingrequests.push(request);
      }
    });
    this.requests.forEach(request => {
      if (request.statusId === 2) {
        this.approvedrequests.push(request);
      }
    });
    this.requests.forEach(request => {
      if (request.statusId === 3) {
        this.deniedrequests.push(request);
      }
    });
  }


  all() {
    this.active = this.allrequests;
  }

  pending() {
    this.active = this.pendingrequests;
  }

  approved() {
    this.active = this.approvedrequests;
  }

  denied() {
    this.active = this.deniedrequests;
  }

  isEmpty() {
    return this.active.length === 0;
  }
}
