/**
 * Created by stephen on 8/13/18.
 */
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-corporation',
  templateUrl: './corporation.component.html',
  styleUrls: ['./corporation.component.css']

})

export class CorporationComponent implements OnInit{


  name: string = "Google Inc";

  hobbies = ["Sports", "Reading", "Music"];

  info = {
    industry: "Internet, Software, Computer hardware",
    website: "google.com"
  }

  constructor() { }

  ngOnInit() {
  }

}
