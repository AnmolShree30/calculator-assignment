import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface History{
  expression:string;
  result:string
}
@Injectable({
  providedIn: 'root'
})
export class HistoryService {

history:History[]=[]
getHistory(){
  return this.history
}
addHistory(data:History){
this.history.push(data);

}
clearHistory(){
  this.history=[];
}



 
}
