import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { LimitTextPipe } from './pipes/limit-text.pipe';

export interface Emails {
  name: string;
  namelimited?: string;
  subject: string;
  subjectlimited?: string;
  desc: string;
  desclimited: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  naText = '--';
  emails: Array<Emails> = [];

  constructor(private app: AppServiceService, private limitText: LimitTextPipe) {
    this.app.getEmails().subscribe((data: {emails: Array<Emails>}) => {
      console.log(data);
      this.emails = data.emails ? data.emails.map((email) => {
        return Object.assign({}, email, {
          namelimited: this.limitText.transform(email.name),
          subjectlimited: this.limitText.transform(email.subject),
          desclimited: this.limitText.transform(email.desc)
        })
      }) : [];
    });
  }
}
