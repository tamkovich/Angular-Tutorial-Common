import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message: string;
  items = ["Django", "Flask", "Odoo", "AioHTTP", "Tornado"];
  loggedIn = true;

  constructor() { 
  	setInterval(()=>{
  		this.message = new Date().toLocaleTimeString();
  	}, 1000);
  }

  ngOnInit() {
  }

}
