import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../../app-service.service';
import { LimitTextPipe } from '../../pipes/limit-text.pipe';
import { RemoveSpecialCharsPipe } from '../../pipes/remove-special-chars.pipe';
import { TitlecasePipe } from '../../pipes/titlecase.pipe';
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
  messages = ['Verifying...', 'Initializing...', 'were almost done...'];
  modalMessage: string;
  naText = '--';
  emails: Array<Emails> = [];
  selectedEmail: Emails;
  showModal: boolean;

  constructor(private app: AppServiceService, private limitText: LimitTextPipe, private route: Router, private removeSpeChars: RemoveSpecialCharsPipe, private titlecase: TitlecasePipe) {
    // console.log('moment', moment(new Date()).format('DD MM YYYY'));
    this.app.loaderEvent.emit({hideloader: false});

    const getData = (data) => {
      const updated_data = this.getNeha(data);
      this.emails = updated_data ? updated_data.map((email) => {
        Object.keys(email).map((key) => {
          if(typeof email[key] === 'string' && key !== 'body'){
            email[key] = this.removeSpeChars.transform(email[key]);
          }
        });

        // try{
        //   var parser = new DOMParser();
        //   var htmlDoc = parser.parseFromString(email.body, 'text/html');
        //   desc = htmlDoc.getElementsByTagName('p')[0].innerHTML;
        // }
        // catch(e) {
          // email.body = email.body + '<br/><br/> Thank you';
        // }
        const ext = {
          // namelimited: this.limitText.transform(email.name),
          subjectlimited: this.limitText.transform(email.subject),
          desclimited: this.limitText.transform(email.body)
        };

        return Object.assign({}, email, ext);
      }) : [];

      this.selectEmail(this.emails[0]);
      this.app.loaderEvent.emit({hideloader: true});
    }
    this.app.getEmails().subscribe(getData);
    // getData([{"mailId":"14","createdAt":"2019-03-08T09:17:17.577Z","subject":"An email","date":"Thu, 4 Mar 2010 15:35:32 -0800","from":"george@foo.com","to":"paul@goo.com","sender":"paul@goo.com","body":"<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna?</p><p>Aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.</p><p>Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est.</p><p>Laborum sed ut perspiciatis unde omnis iste natus error sit. Voluptatem accusantium doloremque laudantium totam.</p><p>Rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>"},{"mailId":"15","createdAt":"2019-03-08T09:17:18.407Z","subject":"An email","date":"Thu, 4 Mar 2010 15:35:32 -0800","from":"george@foo.com","to":"paul@goo.com","sender":"paul@goo.com","body":"<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna?</p><p>Aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.</p><p>Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est.</p><p>Laborum sed ut perspiciatis unde omnis iste natus error sit. Voluptatem accusantium doloremque laudantium totam.</p><p>Rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>"},
    // {"mailId":"15","createdAt":"2019-03-08T09:17:18.407Z","subject":"An email","date":"Thu, 4 Mar 2010 15:35:32 -0800","from":"neha@foo.com","to":"paul@goo.com","sender":"paul@goo.com","body":"<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna?</p><p>Aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.</p><p>Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est.</p><p>Laborum sed ut perspiciatis unde omnis iste natus error sit. Voluptatem accusantium doloremque laudantium totam.</p><p>Rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>"}]);  
  }

  getNeha(data: Array<Emails>) {
    if(data && data.length) {
      const index = data.findIndex((val: Emails) => {
        return val.from && val.mailId.indexOf('125') > -1;
      });

      if(index > -1) {
        const neha = data.splice(index, 1);
        data = neha.concat(data);
      }
    }
    return data;
  };

  selectEmail(email: Emails) {
    this.selectedEmail = email;
    // console.log('selected email', this.selectedEmail);
  }

  pollTimer;
  analyzeMail() {
    this.app.loaderEvent.emit({hideloader: false});
    let count = 0;

    const stoploading = () => {
      clearInterval(this.pollTimer);
      this.app.loaderEvent.emit({hideloader: true});
      this.app.noteEvent.emit(true);
    }

    const callback = () => {
      // console.log('ffsfasf', count);
      this.modalMessage = this.messages[count] ? this.messages[count] : this.modalMessage;
      this.app.loaderEvent.emit({hideloader: undefined, message: this.modalMessage});

      // this.app.analyzePoll().subscribe((data: any) => {
      //   if(data.status === 'ok') {
      //     stoploading();
      //     // show notification
      //   }
      // });
      count++;
    }

    callback();
    this.pollTimer = setInterval(callback, 5000);
    this.app.analyzeEmail().subscribe(() => {
      stoploading();
      this.showModal = true;
    });
    // this.app.anaALyze()
  }

  hideModal(){
    this.showModal = false;
  }
}
