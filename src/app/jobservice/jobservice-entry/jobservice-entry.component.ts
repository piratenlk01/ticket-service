import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api/message';
import { ETicketCommentModel, ETicketCompletedModel, ETicketGetByIdParametrModel, ETicketProcessModel, ETicketViewModel } from 'src/app/model/eticketmodel';
import { TicketserviceService } from 'src/app/service/ticketservice.service';

@Component({
    selector: 'app-jobservice-entry',
    templateUrl: './jobservice-entry.component.html',
    styleUrls: ['./jobservice-entry.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfirmationService]
})
export class JobserviceEntryComponent implements OnInit {
    // ประกาศตัวแปรสเตตัส
    ErrorVar: number = 1;
    SuccesVar: number = 2;
    WarnVar: number = 3;
    InfoVar: number = 4;

    Msgs: Message[] = [];
    PriorityName: any[] = []
    DepartmentName: any[] = []
    Id: string;
    CompCode: string;
    Linkmail: string;

    adminMode: boolean = false;
    viewMode: boolean = false;

    commentIsActive: boolean = false
    NoShow: boolean = false;
    NoEditActive: boolean = false;
    StartDateActive: boolean = false;
    StartTimeActive: boolean = false;
    DueDateActive: boolean = false;
    DueTimeActive: boolean = false;
    DescriptionAdviceActive: boolean = false;
    DepartmentIdActive: boolean = false;
    PriorityActive: boolean = false;

    getbyidpara = <ETicketGetByIdParametrModel>{}
    detailview = <ETicketViewModel>{}
    insertcomment = <ETicketCommentModel>{}
    insertprocess = <ETicketProcessModel>{}
    insertcomplele = <ETicketCompletedModel>{}

    StartDate: string;    // วันที่เริ่ม
    StartTime: string;    // เวลาเริ่ม
    DueDate: string;      // วันที่กำหนดส่ง
    DueTime: string;      // เวลากำหนดส่ง

    Select2PlaceHolderOption = {
        placeholder: {
            id: '-1',
            text: 'All'
        },
        style: {
            color: '#f00;'
        },
        allowClear: true
    };

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

        this.tickservice.dropdowndepartment().then(s => {
            this.DepartmentName = s
        })

        if(_id){
            this.tickservice.getjobservice().then(s => {
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
                this._router.navigate(['jobservice']);
            },
            reject: (type) => {
            }
        });
    }

}
