import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberboxdxService {

  constructor() { }

    selectNumber(e) {
        let inp = e.element.querySelector("input.dx-texteditor-input"); 
        if (inp) {
            inp.addEventListener('focus', function (event) {
                inp.select();
            });
        }
    }
}
