import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    // dropDownValue=''

  constructor(private dropData:DataService){ }

  onchangeDropDown(value:any){
    this.dropData.activeDropEmitter.next(value.target.value)
      // this.dropDownValue=value.target.value
  }
}
