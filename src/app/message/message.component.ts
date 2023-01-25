import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit,OnDestroy{

 activeDropData='Home';
  
 private subscription:Subscription | any

  constructor(private activeDropDataService:DataService){}
  
  ngOnInit(): void {
    this.subscription=this.activeDropDataService.activeDropEmitter.subscribe(activeData=>{
      this.activeDropData=activeData
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
