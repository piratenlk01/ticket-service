import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api/message';
import { TicketserviceService } from '../service/ticketservice.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    Msgs: Message[] = [];
    MsgsCompanyByYear: Message[] = [];

    data: any;
    options: any;
    optionsCompany: any;
    optionsSatisfaction: any;

    _icon: string;
    _bg: string;
    _bgbtm: string;

    dropdownSelect2Year: any[] = []
    CountStatusModelItem: CountStatusModelItem[]= []

    SatisfactionPie: any
    SatisfactionDesc = <any>{}
    SatisfactionDescPie: any[] = [];

    DivisionByYearbar: any
    DivisionByYearTitle: string

    CompanyByYearbar: any
    CompanyByYearTitle: string

    year: number
    currentyear: any = 'กรุณาเลือก'
    ticketCompany: any
    companyname: string = 'ALL';
    total: number

    adminMode: boolean = false;
    viewMode: boolean = false;

    
    constructor(
        private tickservice: TicketserviceService
    ) {
        this.dropdownSelect2Year = [
            { id: "2021", text: "2021" },
            { id: "2020", text: "2020" }
        ]
        
        this.options = {
            responsive: true,
            scales: {
            xAxes: [{
                barThickness: 10,
                categoryPercentage: 1
            }]
            },
            barValueSpacing: 0.1,
        }

        this.optionsSatisfaction = {
            legend: {
              display: false
            },
            responsive: false,
            maintainAspectRatio: false
        }
    }
    

    ngOnInit(): void {
        this.tickservice.dropdowncompany().then(s => {
            this.ticketCompany = s
            this.ticketCompany.unshift({ id: "ALL", text: "ALL" });
        })

        this.tickservice.getdashboardstatus().then(s => {
            s.forEach(i => {
                if (i.Status == 0) {
                    this._bg = "#ffa4cc"
                    this._bgbtm = "#f367a4"
                    this._icon = "fas fa-ticket-alt"
                }
                if (i.Status == 1) {
                    this._bg = "#87CCF9"
                    this._bgbtm = "#3192E1"
                    this._icon = "fas fa-file-alt"
                }
                if (i.Status == 2) {
                    this._bg = "#FFD37A"
                    this._bgbtm = "#DFB051"
                    this._icon = "fas fa-hourglass-half"
                }
                if (i.Status == 4) {
                    this._bg = "#7bd670"
                    this._bgbtm = "#338828"
                    this._icon = "fas fa-check"
                }
                if (i.Status == 5) {
                    this._bg = "#b9b9b9"
                    this._bgbtm = "#686769"
                    this._icon = "fas fa-lock"
                }
                this.CountStatusModelItem.push({
                    Status: i.Status,
                    StatusDescription: i.StatusDescription,
                    CountTotal: i.CountTotal,
                    backgroundColor: this._bg,
                    backgroundColorbottom: this._bgbtm,
                    icon: this._icon
                })

            })
        })
        this.tickservice.getbarchart().then(s => {
            this.DivisionByYearbar = s.BarChart
            this.DivisionByYearTitle = s.Title
        })
        this.tickservice.getpiechart().then(s => {

            this.SatisfactionDesc =  s

            this.SatisfactionPie = this.SatisfactionDesc.DoughnutChart
            for (let i = 0; i < this.SatisfactionDesc.Description.labels.length; i++) {
              let _datas = this.SatisfactionDesc.Description.data[i];
              let _colors = this.SatisfactionDesc.Description.color[i];
              let _labels = this.SatisfactionDesc.Description.labels[i];
              let _percent = this.SatisfactionDesc.Description.percent[i];
              this.SatisfactionDescPie.push(<any>{
                data: _datas,
                color: _colors,
                labels: _labels,
                percent: _percent
              })
            }
            this.SatisfactionDesc.Description.data.forEach(i => {
              this.total += i
            })
        })
        this.tickservice.getbarchartbycompany().then(s => {
            this.CompanyByYearbar = s.BarChart
            this.CompanyByYearTitle = s.Title
        })
    }
}

class CountStatusModelItem {
    Status: number;
    StatusDescription: string;
    CountTotal: number;
    backgroundColor: string;
    backgroundColorbottom: string;
    icon: string;
}