import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmailsComponent } from './routed-components/emails/emails.component';
import { ResumelistComponent } from './routed-components/resumelist/resumelist.component';
import { TicketlistComponent } from './routed-components/ticketlist/ticketlist.component';
import { TicketdetailComponent } from './routed-components/ticketdetail/ticketdetail.component';
import { ExtcampComponent } from './routed-components/extcamp/extcamp.component';
import { ReportsComponent } from './routed-components/reports/reports.component';

const routes: Routes = [
      {
        path: 'emails',
        component: EmailsComponent
      }, {
          path: 'resumelist',
          component: ResumelistComponent
        
      }, {
        path: 'ticketlist',
        component: TicketlistComponent
      }, {
        path: 'ticketdetail',
        component: TicketdetailComponent
      },
      {
        path: 'extcamp',
        component: ExtcampComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      { 
        path: '',
        redirectTo: '/emails',
        pathMatch: 'full'
      }     
    ];

@NgModule({
  declarations: [
    EmailsComponent,
    ResumelistComponent,
    TicketlistComponent,
    TicketdetailComponent,
    ExtcampComponent,
    ReportsComponent
  ],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
