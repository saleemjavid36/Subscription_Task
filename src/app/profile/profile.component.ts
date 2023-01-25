import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  activeDropData='Home';

  subscription:Subscription | any
  
  constructor(private activeDropDataService:DataService){}
  
  ngOnInit(): void {
    this.activeDropDataService.activeDropEmitter.subscribe(activeData=>{
      this.activeDropData=activeData

    })
  }
}
