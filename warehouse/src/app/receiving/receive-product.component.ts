import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {

 public showForm:boolean;

  model = {};
  constructor() { }
  private receivedProducts = []

  ngOnInit() {
    this.showForm = false;
  }

  saveTrackingNumber = (trackingNumber) =>{
    this.showForm = true;
    //console.log(this.model); -- Works, technically
    console.log(trackingNumber);
  }

  receiveProduct(productID, quantity){
    console.log("Receive product" + productID + " " + quantity);
    this.receivedProducts.push([productID, quantity]);
    console.log(this.receivedProducts);
    
  }

  finishedReceiving(){
    console.log("something");
  }

}
