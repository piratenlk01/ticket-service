import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DateService {

    constructor() {}
    
    // get date string today 
    get DateString() {
        var today = new Date();
        var dd = ("0" + (today.getDate())).slice(-2);
        var mm = ("0" + (today.getMonth() +　1)).slice(-2);
        var yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd ;
    }
    FormatDateString(value:any) {
        if(value){
            var _Date = value.split('/')
            return  _Date[2] + '-' + _Date[1] + '-' + _Date[0]
        }
    }
    
    ConvertDatetoString(value:Date){
        if(value){
            var today = value
            var dd = ("0" + (today.getDate())).slice(-2);
            var mm = ("0" + (today.getMonth() +　1)).slice(-2);
            var yyyy = today.getFullYear();
            return dd + '/' + mm + '/' + yyyy ;
        }
    }

    ConvertTimeFormInsert(time){
        return `${this.DateString} ${time}`
    }

    ExcelDateToJSDate(serial) {
        var utc_days  = Math.floor(serial - 25569);
        var utc_value = utc_days * 86400;                                        
        var date_info = new Date(utc_value * 1000);
     
        var fractional_day = serial - Math.floor(serial) + 0.0000001;
     
        var total_seconds = Math.floor(86400 * fractional_day);
     
        var seconds = total_seconds % 60;
     
        total_seconds -= seconds;
     
        var hours = Math.floor(total_seconds / (60 * 60));
        var minutes = Math.floor(total_seconds / 60) % 60;
        
        return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds).toLocaleDateString('en-GB')
    }
}
