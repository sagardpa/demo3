import { Component, OnInit } from '@angular/core';
import { S1Service } from '/users/sagar_pc/desktop/angular2/demo3/src/app/s1.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {


  userName;
  constructor(private s1 : S1Service) {
    this.s1.userName.subscribe(res=>{
      this.userName = res;
    })
   }
  ngOnInit(): void {

  }
  onchange(uname){
    console.log(uname.value);
    this.s1.userName.next(uname.value)
  }

}
