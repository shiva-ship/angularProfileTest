import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import {trigger, state, style, animate, transition, stagger, query } from "@angular/animations"
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent implements OnInit,AfterViewInit {

 Greet;
 time;
 hour;
 intHour;
 dat:string;
 timeStart;
  constructor(
    public analyticsService: AnalyticsService,
    public datepipe: DatePipe
  ) { 
      this.time =this.datepipe.transform((new Date), 'aaa');
      this.hour =this.datepipe.transform((new Date), 'HH');
      // if(time>=)
    // console.log(currentDateTime);
  }
ngAfterViewInit(): void {
  console.log("this is After loading",this.datepipe.transform((new Date), 'SSS'))
  // this.timeStart=this.datepipe.transform((new Date), 'SSS');
}
  ngOnInit(): void { 
    console.log("this is Before loading",this.datepipe.transform((new Date), 'SSS'))
    // this.dat=this.time
    
    // console.log(typeof this.intHour)
    // // this.Greet=this.time==="p. m."
    
    this.intHour=parseInt(this.hour,10)
    if(this.time==='PM'){
      if(this.intHour<=17){
        this.Greet="Good Afternoon"
      }else{
        this.Greet="Good Evening"
      }  
    }else if(this.time==='AM'){
      this.Greet="Good Morning"
    }
    
    //USE THE BELOW CODE FOR LOCAL SERVER 
      // this.dat=this.time
      // this.intHour=parseInt(this.hour,10)
      // console.log(typeof this.intHour)
      // // this.Greet=this.time==="p. m."
      
      
      // if(this.time==='p. m.'){
      //   if(this.intHour<=5){
      //     this.Greet="Good Afternoon"
      //   }else{
      //     this.Greet="Good Evening"
      //   }
      // }else if(this.time==='a. m.'){
      //   this.Greet="Good Morning"
      // }
    console.log(this.time,"this is AM/PM")
    console.log(this.Greet,"This is greet message ")
    console.log(this.hour,"this is hour")
    console.log(this.intHour,"this is intHour")
  }
  

}
