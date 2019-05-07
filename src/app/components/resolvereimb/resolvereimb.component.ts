import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResolvereimbserviceService } from 'src/app/services/resolvereimbservice.service';
import { ReimbRequest } from 'src/app/models/reimbrequest';
import { splitMatchedQueriesDsl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-resolvereimb',
  templateUrl: './resolvereimb.component.html',
  styleUrls: ['./resolvereimb.component.css']
})
export class ResolvereimbComponent implements OnInit {

  splitCache = sessionStorage.getItem('cache').split(' ');
  roleId = Number(this.splitCache[1]);
  userId = Number(this.splitCache[0]);
  response: Subscription;
  lastStatus = 200;
  active = new Array <ReimbRequest>();
  constructor(private resolveService: ResolvereimbserviceService) { }

  ngOnInit() {
    this.resolveService.requests.length = 0;
    this.resolveService.retrieveRequests(this.userId, this.roleId);
    this.response = this.resolveService.$resolveStatus.subscribe(status => {
      if (status === 200) {
      } else {
        this.lastStatus = status;
      }
    });
    this.active = this.resolveService.requests;
  }

  ngOnDestroy() {
    if (this.response) {
      this.response.unsubscribe();
    }
  }

  resolve(requestId, statusId)
  {
    console.log(requestId);
    console.log(statusId);
    // this.resolveService.resolveRequest(this.userId, requestId, statusId);
    for ( let i = 0; i < this.resolveService.requests.length; i++){
      if ( this.resolveService.requests[i].id === requestId) {
        this.resolveService.requests.splice(i, 1);
        break;
      }
   }
  }

  isEmpty(){
    return this.active.length === 0;
  }

}
