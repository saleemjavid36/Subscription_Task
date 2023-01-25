import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit,OnDestroy{
  activeDropData='Home';

  subscription:Subscription | any;

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
