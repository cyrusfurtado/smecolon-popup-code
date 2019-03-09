import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';
import { Router } from '@angular/router';

export interface TicketList {
  ticketId: string,
  createdAt: string,
  type: string,
  summary: string,
  mailId: string,
  status: string,
  category: string,
  subcategory: string,
  impact: string,
  sla: string,
  op: string
}

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.scss']
})
export class TicketlistComponent implements OnInit {
  naText = '--';
  ticketList: Array<TicketList>;
  constructor(private app: AppServiceService, private route: Router) { }

  ngOnInit() {
    this.app.geTickets().subscribe((data: Array<TicketList>) => {
      this.ticketList = data;
    });
  }

  rowSelected(ticket: TicketList) { 
    this.route.navigate(['/ticketdetail', ticket]);
  }
}
