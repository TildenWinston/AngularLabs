import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'nw-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  private addresses = [];
  //address = {};
  id;

  constructor() { }

  ngOnInit() {
    this.addresses.push({});
  }
  addAddress(){
    this.addresses.push({});
    console.log(this.addresses);
  }

}
