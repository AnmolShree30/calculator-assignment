import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/service/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  constructor(private histroy:HistoryService) { 
   
  }

  getHistory(){
    return this.histroy.getHistory() 
  }

}
