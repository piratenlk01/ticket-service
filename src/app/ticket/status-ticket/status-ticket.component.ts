import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api/message';
import { CountTotalStatusViewModel, ETicketParametrModel, ETicketViewModel } from 'src/app/model/eticketmodel';
import { TicketserviceService } from 'src/app/service/ticketservice.service';

@Component({
    selector: 'app-status-ticket',
    templateUrl: './status-ticket.component.html',
    styleUrls: ['./status-ticket.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfirmationService]
})
export class StatusTicketComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private confirmationService: ConfirmationService,
        private tickservice:TicketserviceService,
        private _router: Router,
        private router: ActivatedRoute
        ) { }

    // ประกาศตัวแปรสเตตัส
    ErrorVar: number = 1;
    SuccesVar: number = 2;
    WarnVar: number = 3;
    InfoVar: number = 4;

    Msgs: Message[] = [];
    data: any;
    options: any;
    dataCustomer: any;
    optionsCus: any;
    ticketDivision: any
    ticketType: any
    ticketStatus: any
    ticketCompany: any
    CompCodeGet: string
    Datefrom: string;
    Dateto: string;
    Linkgoal: string;

    datefromIsActive: boolean = false
    datetoIsActive: boolean = false

    adminMode: boolean = true;

      // get data
    paragetlist = <ETicketParametrModel>{}
    eticketlistview: ETicketViewModel[] = []
    countstatus: CountTotalStatusViewModel[] = []

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
        this.tickservice.getticketlist().then(s => {
            this.countstatus = s.CountTotalStatus
            this.eticketlistview = s.ETicket
        })
    }
}
