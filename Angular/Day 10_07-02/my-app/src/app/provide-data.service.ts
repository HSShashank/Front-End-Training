import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {

  constructor() {   }
  arrHead = ["ItemName","PricePerUnit", "Quantity", "TotalPrice"];
  arr = [{
    "ItemName": "PEN",
    "PricePerUnit": 10,
    "Quantity": 8,
    "TotalPrice": 80
  },{
      "ItemName": "PENCIL",
      "PricePerUnit": 15,
      "Quantity": 8,
      "TotalPrice": 120
    },{
      "ItemName": "ERASER",
      "PricePerUnit": 5,
      "Quantity": 8,
      "TotalPrice": 40
    },{
      "ItemName": "RULER",
      "PricePerUnit": 6,
      "Quantity": 8,
      "TotalPrice": 48
    }]
}
