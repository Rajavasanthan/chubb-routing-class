import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ind-service',
  templateUrl: './ind-service.component.html',
  styleUrls: ['./ind-service.component.css']
})
export class IndServiceComponent implements OnInit,OnDestroy {
  count = 0;
  constructor() { }

  ngOnInit() {
    console.log("Init")
    setInterval(() => {
      this.count ++;
    },2000)
  }

  ngOnDestroy(){
    console.log("Destroy")
  }

  ngDoCheck(){
    console.log("Ng DO Check")
  }

}
