import { Component, OnInit} from '@angular/core';
import {Kinyozi} from './kinyozi';
import {CallApiService} from './call-api.service'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app';
  vinyozi:any;
  vinyoziarray:Kinyozi[]=[]
  constructor(private apiService:CallApiService){}

  ngOnInit() {
    this.apiService.quoteRequest()
    this.vinyoziarray=this.apiService.vinyoziarray;
  }



}
