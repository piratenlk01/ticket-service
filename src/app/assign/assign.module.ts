import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AssignRoutingModule } from './assign-routing.module'

import { AssignComponent } from './assign.component';
import { AssignListComponent } from './assign-list/assign-list.component'
import { AssignEntryComponent } from './assign-entry/assign-entry.component'

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [
        AssignComponent,
        AssignListComponent,
        AssignEntryComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AssignRoutingModule,
        ConfirmDialogModule,
        MessagesModule,
        RatingModule,
        TableModule
    ]
})
export class AssignModule { }
