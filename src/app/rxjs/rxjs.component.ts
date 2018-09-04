/**
 * Created by stephen on 8/16/18.
 */
import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']

})

export class RxjsComponent implements OnInit{


  constructor() { }

  numbers = of(1, 2, 3, 4, 5, 6);

  ngOnInit() {

    var button = document.querySelector('button');
    fromEvent(button, 'click')
      .subscribe(() => console.log('Clicked!'));

    this.numbers.subscribe((num) => console.log("num: ", num));

  }

}
