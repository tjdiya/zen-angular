import { Component, ViewChild, ElementRef , Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'zen-invoice-input',
    templateUrl: './invoice-input.component.html',
    styleUrls: ['invoice-input.component.css']
})
export class InvoiceInputComponent {
    constructor() {}
    invoiceItems = [];
    @ViewChild('itemName') itemNameRef: ElementRef;
    @ViewChild('itemPrice') itemPriceRef: ElementRef;

    @Output("onVegAdded") onVegitableAdded = new EventEmitter<{itemName: string, price: number}>();
    @Output('onCosAdded') onCosmeticsAdded = new EventEmitter<{itemName: string, price: number }>();
    
    addVeg(itemName: HTMLInputElement, itemPrice: HTMLInputElement) {
        const invoiceItem = {
          type: 'veg',
          itemName: this.itemNameRef.nativeElement.value,
          price: this.itemPriceRef.nativeElement.value
        };
       
        this.onVegitableAdded.emit(invoiceItem);
      }

      addCosmetics(itemName: HTMLInputElement, itemPrice: HTMLInputElement) {
        const invoiceItem = {
          type: 'cosmetics',
          itemName: this.itemNameRef.nativeElement.value,
          price: this.itemPriceRef.nativeElement.value
        };
        this.onCosmeticsAdded.emit(invoiceItem);
      }
}
