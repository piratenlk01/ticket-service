import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api/message';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ETicketGetByIdParametrModel, ETicketModel, ETicketUploadFileModel, ETicketViewModel, FileUploaded } from 'src/app/model/eticketmodel';
import { TicketserviceService } from 'src/app/service/ticketservice.service';

@Component({
    selector: 'app-open-ticket',
    templateUrl: './open-ticket.component.html',
    styleUrls: ['./open-ticket.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfirmationService]
})
export class OpenTicketComponent implements OnInit {

    // ประกาศตัวแปรสเตตัส
    ErrorVar: number = 1;
    SuccesVar: number = 2;
    WarnVar: number = 3;
    InfoVar: number = 4;

    ratingscore: number;
    Msgs: Message[] = [];

    adminMode: boolean = true;
    viewMode: boolean = true;

    companyActive: boolean = false
    detailsTkShow: boolean = false
    saveShowBtn: boolean = false
    textDis: boolean = false
    showlistupload: boolean = false

    // เช็คส่งไปตอน insert
    CompanyActive: boolean = false
    TopicActive: boolean = false
    DivisionActive: boolean = false
    TypeActive: boolean = false
    DescActive: boolean = false
    EmailActive: boolean = false
    TelephoneActive: boolean = false
    EmailSupervisorActive: boolean = false
    SameNameActive: boolean = false

    ticketDivision: any
    ticketType: any
    ticketCompany: any

    // addtopic = <ETicketModel>{}
    insertmodel = <ETicketModel>{}
    uploadfilemodel = <ETicketUploadFileModel>{}
    detailview = <ETicketViewModel>{}
    getbyidpara = <ETicketGetByIdParametrModel>{}

    selectFile: File[] = null;
    uploadedFiles: any[] = [];
    insertFile: FileUploaded[]
    seenNames = {};
    SelectFileArray: any;
    myID: any
    nameremove: string

    addtopic:FormGroup
    
    constructor(
        private fb: FormBuilder,
        private confirmationService: ConfirmationService,
        private tickservice:TicketserviceService,
        private _router: Router,
        private router: ActivatedRoute
    ){  }
 
    ngOnInit(): void {


        let _id = this.router.snapshot.paramMap.get('Id')
        let _compcode = this.router.snapshot.paramMap.get('Compcode')
    
        if(_id && _compcode){
            this.detailsTkShow = true;
            this.textDis = true
            this.adminMode = false
        }


        this.addtopic = this.fb.group({
            CompCode: new FormControl({value:'NHC',disabled:!this.adminMode}, Validators.required),
            Topic: new FormControl({value:'',disabled:this.textDis}, Validators.required),
            ETicket_DivisionId: new FormControl({value:'0',disabled:this.textDis}, Validators.required),
            ETicket_TypeId: new FormControl({value:'0',disabled:this.textDis}, Validators.required),
            Description: new FormControl({value:'',disabled:this.textDis}, Validators.required),
            Email: new FormControl({value:'',disabled:this.textDis}, Validators.required),
            Telephone: new FormControl({value:'',disabled:this.textDis}, Validators.required),
            EmailSupervisor: new FormControl({value:'',disabled:this.textDis}, Validators.required)
        })

        this.tickservice.dropdowncompany().then(s => {
            this.ticketCompany = s
        })
        this.tickservice.dropdowndivision().then(s => {
            this.ticketDivision = s
        })
        this.tickservice.dropdowntickettype().then(s => {
            this.ticketType = s
        })
        if(_id && _compcode){
            this.tickservice.getticketlist().then(s => {
                let _ticket = s.ETicket.filter(i => i.Id === parseInt(_id))
                
                if(_ticket.length > 0){
                    this.detailview = _ticket[0]
                    this.addtopic.get('CompCode').setValue(_ticket[0].CompCode)
                    this.addtopic.get('Topic').setValue(_ticket[0].Topic)
                    this.addtopic.get('ETicket_DivisionId').setValue(_ticket[0].ETicket_DivisionId)
                    this.addtopic.get('ETicket_TypeId').setValue(_ticket[0].ETicket_TypeId)
                    this.addtopic.get('Description').setValue(_ticket[0].Description)
                    this.addtopic.get('Email').setValue(_ticket[0].Email)
                    this.addtopic.get('Telephone').setValue(_ticket[0].Telephone)
                    this.addtopic.get('EmailSupervisor').setValue(_ticket[0].EmailSupervisor)
                }
            })
        }

    }
    get compcode() { return this.addtopic.get('CompCode'); }
    get topic() { return this.addtopic.get('Topic'); }
    get eticketdivision() { return this.addtopic.get('ETicket_DivisionId'); }
    get etickettypeid() { return this.addtopic.get('ETicket_TypeId'); }
    get description() { return this.addtopic.get('Description'); }
    get email() { return this.addtopic.get('Email'); }
    get telephone() { return this.addtopic.get('Telephone'); } 
    get emailsupervisor() { return this.addtopic.get('EmailSupervisor'); }



    Insert(){
        if(this.addtopic.status == "INVALID"){
            this.addtopic.markAllAsTouched()
            return false;
        }
    }

    Backpage() {
        this.confirmationService.confirm({
            message: 'คุณต้องการย้อนกลับหน้าหลักหรือไม่',
            header: 'Confirmation',
            icon: 'fa fa-arrow-circle-left',
            accept: () => {
                this._router.navigate(['ticket']);
            },
            reject: (type) => {
            }
        });
    }

}
