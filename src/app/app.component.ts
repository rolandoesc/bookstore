import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';
  dataset:any = [];

  constructor(){};
  
  ngOnInit(){
    console.log('on init');

    d3.csv('./assets/books.csv', (data) => { 
      this.dataset  = data;
      console.log(data);
    });

  }// ngOnInit
}
