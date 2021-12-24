import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api/message';
import { ETicketAssignModel, ETicketCloseModel, ETicketGetByIdParametrModel, ETicketViewModel } from 'src/app/model/eticketmodel';
import { TicketserviceService } from 'src/app/service/ticketservice.service';

@Component({
    selector: 'app-assign-entry',
    templateUrl: './assign-entry.component.html',
    styleUrls: ['./assign-entry.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfirmationService]
})
export class AssignEntryComponent implements OnInit {
    // ประกาศตัวแปรสเตตัส
    ErrorVar: number = 1;
    SuccesVar: number = 2;
    WarnVar: number = 3;
    InfoVar: number = 4;

    NoEditActive: boolean = false;
    NoShow: boolean = false;
    adminMode: boolean = false;
    viewMode: boolean = false;

    Msgs: Message[] = [];
    AssignName: any
    PriorityName: any
    Id: string;
    CompCode: string;
    Linkmail: string;

    ratingscore: number;
    ratingscoreActive: boolean = false

    getbyidpara = <ETicketGetByIdParametrModel>{}
    detailview = <ETicketViewModel>{}
    assignpara = <ETicketAssignModel>{}
    insertclose = <ETicketCloseModel>{}

    constructor(
        private fb: FormBuilder,
        private confirmationService: ConfirmationService,
        private tickservice: TicketserviceService,
        private _router: Router,
        private router: ActivatedRoute
    ) {
        this.PriorityName = [
            {
                "id": "1",
                "text": "Low"
            },
            {
                "id": "2",
                "text": "Medium"
            },
            {
                "id": "3",
                "text": "High"
            }
        ]
     }

    ngOnInit(): void {
        let _id = this.router.snapshot.paramMap.get('Id')

        this.tickservice.getassignuser().then(s => {
            this.AssignName = s
        })
        if(_id){
            this.tickservice.getticketwaitlist().then(s => {
                let _ticket = s.ETicket.filter(i => i.Id === parseInt(_id))

                if(_ticket.length > 0){
                    this.detailview = _ticket[0]
                    if (this.detailview.Status == 4 || this.detailview.Status == 5) {
                        this.NoEditActive = true
                        this.NoShow = false
                    } else {
                    this.NoEditActive = false
                    this.NoShow = true
                    }
                    this.assignpara.CurrentAssignTo = this.detailview.CurrentAssignTo
                    this.assignpara.Priority = this.detailview.Priority
                }
            })
        }
        

    }

    Backpage() {
        this.confirmationService.confirm({
            message: 'คุณต้องการย้อนกลับหน้าหลักหรือไม่',
            header: 'Confirmation',
            icon: 'fa fa-arrow-circle-left',
            accept: () => {
                this._router.navigate(['assign']);
            },
            reject: (type) => {
            }
        });
    }
}
