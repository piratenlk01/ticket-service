import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[navClickToggle]',
    host: {
        '(click)': 'onclick($event.target)'
    }
})
export class NavClickToggleDirective {

    constructor() { }

    onclick(item: any) {
        item.parentElement.classList.toggle('nav-expand');
    }
}
