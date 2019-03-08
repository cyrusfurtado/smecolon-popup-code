import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getEmails(): Observable<any> {
    return this.http.get('http://192.168.43.247:4567/mails');
  }
}
