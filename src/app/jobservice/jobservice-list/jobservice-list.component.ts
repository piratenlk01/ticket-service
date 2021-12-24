import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api/message';
import { CountTotalStatusViewModel, ETicketParametrModel, ETicketViewModel } from 'src/app/model/eticketmodel';
import { TicketserviceService } from 'src/app/service/ticketservice.service';

@Component({
  selector: 'app-jobservice-list',
  templateUrl: './jobservice-list.component.html',
  styleUrls: ['./jobservice-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ConfirmationService]
})
export class JobserviceListComponent implements OnInit {
    
    Msgs: Message[] = [];
    
    // get data
    paragetlist = <ETicketParametrModel>{}
    eticketlistview: ETicketViewModel[] = []
    countstatus: CountTotalStatusViewModel[] = []

    ticketDivision: any
    ticketType: any
    ticketStatus: any
    ticketCompany: any

    constructor(
        private tickservice: TicketserviceService
    ) { }

  ngOnInit(): void {
    this.tickservice.dropdowncompany().then(s => {
        this.ticketCompany = s
    })
    this.tickservice.dropdowndivision().then(s => {
        this.ticketDivision = s
    })
    this.tickservice.dropdownstatus().then(s => {
        this.ticketStatus = s
    })
    this.tickservice.getjobservice().then(s => {
        this.countstatus = s.CountTotalStatus
        this.eticketlistview = s.ETicket
    })
  }

}
