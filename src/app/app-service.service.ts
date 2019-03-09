import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoaderEvent {
  hideloader: boolean;
  message?: string;
}

export interface NoteEvent{
  show: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  apiHost = 'http://10.244.54.35:4567';
  loaderEvent = new EventEmitter<LoaderEvent>();
  noteEvent = new EventEmitter<NoteEvent>();

  constructor(private http: HttpClient) { }
  
  getEmails(): Observable<any> {
    return this.http.get(`${this.apiHost}/mails`);
  }

  getResumes() {
    return this.http.get(`${this.apiHost}/resumes`);
  }

  analyzeEmail() {
    return this.http.get(`${this.apiHost}/resumesAnalyse`);
  }

  analyzePoll() {
    return this.http.get(`${this.apiHost}/analyze/poll`);
  }

  raiseTicket() {
    return this.http.get(`${this.apiHost}/raiseTicket`);
  }

  geTickets() {
    return this.http.get(`${this.apiHost}/tickets`);
  }

  getTicketDetails(id: string) {
    return this.http.get(`${this.apiHost}/mails/${id}`);
  }

}
