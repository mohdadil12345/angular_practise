

import { Directive, ElementRef, OnInit } from "@angular/core";

// 1=>  we want to use this custom directive selector as an attribute so we need to wrap within square bracket
//  then we can use this selector on an html element

   @Directive({
 selector: '[custom-directive]',

  })


  export class SetBackground implements OnInit {

    //  2 => ele is paramter which is type of element Ref when we use custom-dir on html element an instance of 
    //  setBackground 
    //   => we need to inform angular about this directive so we have to impport in app module

    constructor ( private ele : ElementRef) {}

//  3 => call ngOnInit
//  4 => to access ele paramter from contrucor we create private proprty 
    ngOnInit() {
       
        this.ele.nativeElement.style.background = "yellow"
        this.ele.nativeElement.style.color = "red"
        this.ele.nativeElement.style.padding = "20px"

    }

 


    //  contrucror get called it properties not initalized yet so we will use ngOnInit()
    //  because it ngOnINit() life yccle hooks get called after all the 
    // proprties are fully initialized



  }
  