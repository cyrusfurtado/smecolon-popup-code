import { Component, OnInit } from '@angular/core';

export interface ResumeListItem {
  id: string;
  submit_date: string;
  categorization: string;
  support_org: string;
  support_group: string;
  priority: string;
  status: string
}

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.scss']
})
export class TicketlistComponent implements OnInit {
  naText = '--';
  ticketList: Array<ResumeListItem>;
  constructor() { }

  ngOnInit() {
    this.ticketList = [
      {
        id: '4422352',
        submit_date: '02/03/2019',
        categorization: 'Human Resource',
        support_org: 'Human Resource',
        support_group: 'Admin-Space Management',
        priority: 'Medium',
        status: 'Completed'
      },
      {
        id: '5352352',
        submit_date: '04/03/2019',
        categorization: 'Human Resource',
        support_org: 'Enterprise Information Systems',
        support_group: 'Admin-Stationery Items',
        priority: 'High',
        status: 'Pending'
      }
    ]
  }

}
