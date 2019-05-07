import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatereimbserviceService {

  private createStatusSubject = new Subject<number>();
  public  $createStatus = this.createStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  createRequest(amount: number, typeId: number, description: string, receipt: any, authorId: number)
  {
    const payload = {
      amount: amount,
      description: description,
      receipt: receipt,
      authorId: authorId,
      typeId: typeId,
    };
    this.httpClient.post('http://localhost:8080/ERSApp/create', payload, {
      observe: 'response'
      })
      .subscribe(response => {
        this.createStatusSubject.next(200);
      }, err => {
        this.createStatusSubject.next(err.status);
      });
  }
}
