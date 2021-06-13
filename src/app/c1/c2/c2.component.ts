import { Component, OnInit } from '@angular/core';
import { S1Service } from '/Users/Sagar_PC/Desktop/Angular2/demo3/src/app/s1.service';
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  UserName:string = 'sagar';

  constructor(private s1 : S1Service) {
    this.s1.userName.subscribe(res=>{
      this.UserName=res;
    })
   }

  ngOnInit(): void {
  }

  onchange(uname){
    console.log(uname.value);
    this.s1.userName.next(uname.value)
  }

}
