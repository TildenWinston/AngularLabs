import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css']
})
export class OrdersToShipComponent implements OnInit {

  orders;

  constructor(private _http:HttpClient) { }

  getOrdersReadyToShip(){
    this._http
    .get("/api/orders/readyToShip")
    .toPromise()
    .then(
      (success) => {console.log("Hi", success); 
                    this.orders = success;             
    },
      (error) => {console.error("Something went wrong", error)}
    );
  }
  

  ngOnInit() {
    this.getOrdersReadyToShip();
  }
}
