import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getEmails(): Observable<any> {
    return this.http.get('http://10.244.25.148:4567/mails');
  }
}
