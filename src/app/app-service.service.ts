import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoaderEvent {
  hideloader: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  apiHost = 'http://10.244.25.148:4567';
  loaderEvent = new EventEmitter<LoaderEvent>();
  
  constructor(private http: HttpClient) { }
  
  getEmails(): Observable<any> {
    return this.http.get(`${this.apiHost}/mails`);
  }
}
