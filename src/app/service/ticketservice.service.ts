import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TicketserviceService {

    constructor(private http:HttpClient,) { }

    dropdowncompany(){
        return this.http.get<any>('assets/json/company.json')
        .toPromise()
        .then(res => res.data );
    }
    dropdowndivision(){
        return this.http.get<any>('assets/json/division.json')
        .toPromise()
        .then(res => res.data );
    }
    dropdowndepartment(){
        return this.http.get<any>('assets/json/department.json')
        .toPromise()
        .then(res => res.data );
    }
    dropdowntickettype(){
        return this.http.get<any>('assets/json/tickettype.json')
        .toPromise()
        .then(res => res.data );
    }
    dropdownstatus(){
        return this.http.get<any>('assets/json/status.json')
        .toPromise()
        .then(res => res.data );
    }
    getticketlist(){
        return this.http.get<any>('assets/json/ticketlist.json')
        .toPromise()
        .then(res => res.data );
    }
    getticketwaitlist(){
        return this.http.get<any>('assets/json/ticketwaitlist.json')
        .toPromise()
        .then(res => res.data );
    }
    getassignuser(){
        return this.http.get<any>('assets/json/assignuser.json')
        .toPromise()
        .then(res => res.data );
    }
    getjobservice(){
        return this.http.get<any>('assets/json/jobservice.json')
        .toPromise()
        .then(res => res.data );
    }
    getdashboardstatus(){
        return this.http.get<any>('assets/json/dashboardstatus.json')
        .toPromise()
        .then(res => res.data );
    }
    getbarchart(){
        return this.http.get<any>('assets/json/barchart.json')
        .toPromise()
        .then(res => res.data );
    }
    getpiechart(){
        return this.http.get<any>('assets/json/piechart.json')
        .toPromise()
        .then(res => res.data );
    }
    getbarchartbycompany(){
        return this.http.get<any>('assets/json/barchartbycompany.json')
        .toPromise()
        .then(res => res.data );
    }
}
