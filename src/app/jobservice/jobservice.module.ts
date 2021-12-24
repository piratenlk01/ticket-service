import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { JobServiceRoutingModule } from './jobservice-routing.module'

import { JobserviceComponent } from './jobservice.component'
import { JobserviceListComponent } from './jobservice-list/jobservice-list.component'
import { JobserviceEntryComponent } from './jobservice-entry/jobservice-entry.component'

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [
        JobserviceComponent,
        JobserviceListComponent,
        JobserviceEntryComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        JobServiceRoutingModule,
        ConfirmDialogModule,
        MessagesModule,
        RatingModule,
        TableModule
    ]
})
export class JobServiceModule { }
