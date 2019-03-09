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

  apiHost = 'http://10.244.25.36:4567';
  loaderEvent = new EventEmitter<LoaderEvent>();
  noteEvent = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }
  
  getEmails(): Observable<any> {
    return this.http.get(`${this.apiHost}/mails`);
  }

  getResumes() {
    return this.http.get(`${this.apiHost}/resumes`);
  }

  analyzeEmail() {
    return this.http.get(`${this.apiHost}/analyze`);
  }

  analyzePoll() {
    return this.http.get(`${this.apiHost}/analyze/poll`);
  }

}
