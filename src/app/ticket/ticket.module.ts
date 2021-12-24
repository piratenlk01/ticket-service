import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TicketRoutingModule } from './ticket-routing.module'

import { TicketComponent } from './ticket.component';
import { OpenTicketComponent } from './open-ticket/open-ticket.component';
import { StatusTicketComponent } from './status-ticket/status-ticket.component'

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';

@NgModule({
    declarations: [
        TicketComponent,
        OpenTicketComponent,
        StatusTicketComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TicketRoutingModule,
        ConfirmDialogModule,
        MessagesModule,
        RatingModule,
        TableModule
    ]
})
export class TicketModule { }
