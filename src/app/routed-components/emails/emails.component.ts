import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';
import { LimitTextPipe } from '../../pipes/limit-text.pipe';
import * as moment from 'moment';

export interface Emails {
  mailId: string;
  createdAt: string;
  date: string;
  from: string;
  to: string;
  sender: string;
  body: string;
  namelimited?: string;
  subject: string;
  subjectlimited?: string;
  desc: string;
  desclimited: string;
}

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent {
  messages = ['Verifying', 'Initializing', 'were done'];
  modalMessage: string;
  isAnalyzed: boolean = false;
  showPage2: boolean = false;
  naText = '--';
  emails: Array<Emails> = [];
  selectedEmail: Emails;

  constructor(private app: AppServiceService, private limitText: LimitTextPipe) {
    console.log('moment', moment(new Date()).format('DD MM YYYY'));
    const getData = (data) => {
      this.emails = data ? data.map((email) => {
        var desc: string;
        try{
          var parser = new DOMParser();
          var htmlDoc = parser.parseFromString(email.body, 'text/html');
          desc = htmlDoc.getElementsByTagName('p')[0].innerHTML;
        }
        catch(e) {
          desc = email.body;
        }
        
        const ext = {
          // namelimited: this.limitText.transform(email.name),
          subjectlimited: this.limitText.transform(email.subject),
          desclimited: this.limitText.transform(desc)
        };

        return Object.assign({}, email, ext);
      }) : [];
      this.app.loaderEvent.emit(true);
    }
    this.app.getEmails().subscribe(getData);
    // getData([{"mailId":"14","createdAt":"2019-03-08T09:17:17.577Z","subject":"An email","date":"Thu, 4 Mar 2010 15:35:32 -0800","from":"george@foo.com","to":"paul@goo.com","sender":"paul@goo.com","body":"<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna?</p><p>Aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.</p><p>Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est.</p><p>Laborum sed ut perspiciatis unde omnis iste natus error sit. Voluptatem accusantium doloremque laudantium totam.</p><p>Rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>"},{"mailId":"15","createdAt":"2019-03-08T09:17:18.407Z","subject":"An email","date":"Thu, 4 Mar 2010 15:35:32 -0800","from":"george@foo.com","to":"paul@goo.com","sender":"paul@goo.com","body":"<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna?</p><p>Aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.</p><p>Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est.</p><p>Laborum sed ut perspiciatis unde omnis iste natus error sit. Voluptatem accusantium doloremque laudantium totam.</p><p>Rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>"}]);
  }

  selectEmail(email: Emails) {
    this.selectedEmail = email;
    // console.log('selected email', this.selectedEmail);
  }

  analyzeMail() {
    this.app.loaderEvent.emit(false);
    let count = 0;
    const callback = () => {
      console.log('ffsfasf', count);
      this.modalMessage = this.messages[count];
      if (count >= this.messages.length) {
        this.modalMessage = '';
        this.app.loaderEvent.emit(true);
        this.showPage2 = this.isAnalyzed = true;
        clearInterval(timer);
      }
      count++;
    }

    callback();

    let timer = setInterval(callback, 5000);
    // this.app.anaALyze()
  }
}
