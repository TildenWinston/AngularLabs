import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public orders;

  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this.getOrdersReadyToShip();
  }

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

}
