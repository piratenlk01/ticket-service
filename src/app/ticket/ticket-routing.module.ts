import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketComponent } from './ticket.component';
import { OpenTicketComponent } from './open-ticket/open-ticket.component';
import { StatusTicketComponent } from './status-ticket/status-ticket.component'


const routes: Routes = [
    {path: '',component: TicketComponent},
    {path:'OpenEticket', component: OpenTicketComponent },
    {path:'StatusEticket', component: StatusTicketComponent },
    {path:'StatusEticket/:Compcode/:Id', component: OpenTicketComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
