import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { S1Service } from 'src/app/s1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo3';
  userName ;

  constructor(private s1 : S1Service) {
    this.s1.userName.subscribe(res=>{
      this.userName = res;
    })
   }

  ngOnInit(): void {

  }


}
