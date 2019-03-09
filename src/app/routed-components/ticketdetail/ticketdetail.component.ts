import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TicketList } from '../ticketlist/ticketlist.component';

@Component({
  selector: 'app-ticketdetail',
  templateUrl: './ticketdetail.component.html',
  styleUrls: ['./ticketdetail.component.scss']
})
export class TicketdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  naText = '--';
  ticketDetails: TicketList;
  ngOnInit() {
    this.route.paramMap.subscribe((data: any) => {
      console.log('params', data.params);
      this.ticketDetails = data.params;
    });
  }

}
