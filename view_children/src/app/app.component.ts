
import { QueryList } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'view_children';

  // @ViewChild("inputele") inputElements : ElementRef
  //  viewchld return first mathcing elements


   @ViewChildren('inputele') inputElements : QueryList<ElementRef>

  //  viewchldren  return all mathcing elements




fullName : string = ""




  handle_click() {
    // console.log(this.inputElements.nativeElement) // gives first input elemnt


let nameee = ""
     // gives all by using @ViewChildren input elemnt

     this.inputElements.forEach((el) => {
      //  console.log(el.nativeElement)
       console.log(el.nativeElement.value)

       nameee+= el.nativeElement.value + " "

     })

  this.fullName = nameee.trim()

  }

}
