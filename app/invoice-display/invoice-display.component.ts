import { Component, Input } from '@angular/core';

@Component({
    selector: 'zen-invoice-display',
    templateUrl: './invoice-display.component.html',
    styleUrls: ['invoice-display.component.css']
})
export class InvoiceDisplayComponent {
    constructor() {}
    @Input('invItem') invoiceItem: {type: string, itemName: string, price: number};

}
