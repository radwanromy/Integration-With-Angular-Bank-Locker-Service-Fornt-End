import { Component, OnInit } from '@angular/core';
import { Locker } from '../locker';
@Component({
  selector: 'app-locker-service',
  templateUrl: './locker-service.component.html',
  styleUrls: ['./locker-service.component.css']
})
export class LockerServiceComponent implements OnInit {


  lockers!: Locker[];

  constructor() { }

  ngOnInit(): void {
    this.lockers = [{
      "RELID": 1,
      "OPRBRANCD": "hh",
      "RELDATE": "01-MAR-10",
      "OPRSTAMP": "dfdd",
      "UPDATE_DATE": "01-MAR-10",
      "APPFLG": "f",
      "ACTNUM": "53",
      "DRWRID": 443,
      "ACTYPE": "hyg",
      "LCKRID": 453,
      "CUSCOD": "hjf",
      "PAYSTAT": "c",
      "REMARKS": "fdvdf",
      "OPRTIMSTAMP": "01-MAR-10",
      "UPDATE_BY": "f",
      "BRANCD": "hy",
      "APPSTAMP": "f",
      "APPTIMSTAMP": "01-MAR-10"
  }]

  }

}
