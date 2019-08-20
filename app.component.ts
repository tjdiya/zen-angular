import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  invoiceItems: {type: string, itemName: string, price: number}[] = [];
   // itemName: 'veggitem from parent', price: 111};
  // itemName;
  // itemPrice;

  onVegitableAdded(event: {itemName: string, price: number}) {
    
    this.invoiceItems.push({type: 'veg', itemName: event.itemName, price: event.price});
  }
  onCosmeticsAdded(event: {itemName: string, price: number}) {
    console.log(event);
    this.invoiceItems.push({type: 'Cosmetics', itemName: event.itemName, price: event.price});
  }


}
