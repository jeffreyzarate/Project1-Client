import { Component, OnInit } from '@angular/core';
import { CreatereimbserviceService } from 'src/app/services/createreimbservice.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createreimb',
  templateUrl: './createreimb.component.html',
  styleUrls: ['./createreimb.component.css']
})
export class CreatereimbComponent implements OnInit {

  constructor(private createService: CreatereimbserviceService, private router: Router) { }

  amount = 0;
  typeId: number;
  description = '';
  receipt: any;
  splitCache = sessionStorage.getItem('cache').split(' ');
  authorId = Number(this.splitCache[0]);
  response: Subscription;
  lastStatus = 200;

  ngOnInit() {
    this.response = this.createService.$createStatus.subscribe(status => {
      if (status === 200) {
        alert('Request submitted');
      } else {
        alert('Invalid request');
        this.lastStatus = status;
      }
    });
  }

  ngOnDestroy() {
    if (this.response) {
      this.response.unsubscribe();
    }
  }

  submit() {
    this.createService.createRequest(this.amount, this.typeId, this.description, this.receipt, this.authorId);
  }

}