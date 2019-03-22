import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';


@Component({
  selector: 'nw-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  private addresses = [];
  //address = {};
  body;
  

  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this.addresses.push({});
  }
  addAddress(){
    this.addresses.push({});
    console.log(this.addresses);
  }
  
  sendMessage(){
    console.log("send message");
    this.body = {
      "message": {
        "source_guid": "GUID",
        "text": "Hello world ☃☃",
        "attachments": [
          {
            "type": "image",
            "url": "https://i.groupme.com/123456789"
          },
          {
            "type": "image",
            "url": "https://i.groupme.com/123456789"
          },
          {
            "type": "location",
            "lat": "40.738206",
            "lng": "-73.993285",
            "name": "GroupMe HQ"
          },
          {
            "type": "split",
            "token": "SPLIT_TOKEN"
          },
          {
            "type": "emoji",
            "placeholder": "☃",
            "charmap": [
              [
                1,
                42
              ],
              [
                2,
                34
              ]
            ]
          }
        ]
      }
    }

/*     this._http.post("https://api.groupme.com/v3/bots/post?bot_id=928ae511c40879f2e6cee28cda&text=Hello+world", "").toPromise()
    .then(
      (success) => {console.log("Hi", success)            
    },
      (error) => {console.error("Something went wrong 1", error)}
    ); */

    var a = ["a", "b", "c"];
    var b ="";
this.addresses.forEach(function(entry) {
    console.log(entry);
    b = b + entry.toString();
});
    this.body = {
      "bot_id"  : "928ae511c40879f2e6cee28cda",
      "text"    : b
    };
    console.log(this.body.bot_id);
    this._http.post("https://api.groupme.com/v3/bots/post", this.body).toPromise()
    .then(
      (success) => {console.log("Hi", success)            
    },
      (error) => {console.error("Something went wrong 2", error)}
    );;


    
/*     this._http.post("https://api.groupme.com/v3/bots/post", {
      "bot_id"  : "928ae511c40879f2e6cee28cda",
      "text"    : "Hello world"
    })
    .toPromise()
    .then(
      (success) => {console.log("Hi", success)            
    },
      (error) => {console.error("Something went wrong 3", error)}
    );
  }
 */
}
