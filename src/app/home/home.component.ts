import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
  activeDropData='Home';

  subscription:Subscription | any

  constructor(private activeDropDataService:DataService){}
  
  ngOnInit(): void {
    this.subscription = this.activeDropDataService.activeDropEmitter.subscribe(activeData=>{
      this.activeDropData=activeData
      
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
