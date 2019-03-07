import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

export interface Emails {
  name: string;
  subject: string;
  desc: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  naText = '--';
  emails: Array<Emails> = [];

  constructor(private app: AppServiceService) {
    this.app.getEmails().subscribe((data) => {
      console.log(data);
      this.emails = data.emails;
    });
  }
}
