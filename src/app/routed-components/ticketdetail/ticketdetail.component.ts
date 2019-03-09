import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TicketList } from '../ticketlist/ticketlist.component';
import { AppServiceService } from '../../app-service.service';

export interface OtherTicketDetails {
  mailId: string,
  createdAt: string,
  date: string,
  from: string,
  to: string,
  subject: string,
  body: string,
  exp_min: string,
  exp_max: string,
  key_skills: string,
  frameworks: string,
  certifications: string,
  qualification: string,
  job_title: string,
  job_responsibilities: string
}

@Component({
  selector: 'app-ticketdetail',
  templateUrl: './ticketdetail.component.html',
  styleUrls: ['./ticketdetail.component.scss']
})
export class TicketdetailComponent implements OnInit {

  constructor(private app: AppServiceService, private route: ActivatedRoute, private router: Router) { }

  naText = '--';
  ticketDetails: TicketList;
  otherDetails: OtherTicketDetails;
  ngOnInit() {
    this.route.paramMap.subscribe((data: any) => {
      console.log('params', data.params);
      this.ticketDetails = data.params;
    });

    // this.app.getTicketDetails(this.ticketDetails.mailId).subscribe((data: any) => {
    //   this.otherDetails = data && data.length ? data[0]: {};
    // });

    // don't forget to uncomment this
    this.otherDetails = {
        "mailId": "125",
        "createdAt": "2019-03-09T14:54:28.816Z",
        "date": "09-Mar",
        "from": "neha_patil@persistent.com",
        "to": "hr@persistent.co.in",
        "subject": "Require UI developers in project",
        "body": "Hi , \n\nWe require UI developers with Experience Level 2 to 5 years in project.\n\nKindly provide a list of eligible resources meeting the following description :\n \nKey Skills: HTML5, CSS3 ,Angular5 ,Javascript, MySQL \nLibrariesa/Frameworks : D3.js, Jquery, Bootstrap\n\n\nJob Responsibilities :\nWould be responsible for building/ updating modules of the clientís shopping website.Would be involved in requirement gathering and client interactions\n          \n             \nJob Skills:\nCandidate should be experienced in  HTML5, CSS3 ,Angular5 ,Javascript, MySQL \nThe candidate should have a MySQL background\nCandidate having had good exposure to Back-end Server Infrastructure activities preferred\nCandidate having prior exposure to working on D3.js  would be preferred\nStrong Communication & Analytical Skills\n\nRegards",
        "exp_min": "2",
        "exp_max": "5",
        "key_skills": "HTML5, CSS3 ,Angular5 ,Javascript, MySQL ",
        "frameworks": "D3.js, Jquery, Bootstrap",
        "certifications": "app Builder, Platform Developer 1",
        "qualification": "BE/ B-Tech, ME/ M-Tech, MCA,equivalent",
        "job_title": "ML,TL,STL",
        "job_responsibilities": "Would be responsible for building/ updating modules of the clientís shopping website.Would be involved in requirement gathering and client interactions"
      };
  }

}
