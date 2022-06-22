import { Router } from '@angular/router';
import { DataserviceService } from './../dataservice.service';
import { History } from './../models/History';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss']
})
export class TryComponent implements OnInit {

  allTheHistory: History[];

  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {
    this.dataservice.getHistory().subscribe(
      res=>{
        console.log(res);
        this.allTheHistory = res;
      }
    );
  }

}
