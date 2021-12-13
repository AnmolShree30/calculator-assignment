import { Component, Input, OnInit } from '@angular/core';
import { History, HistoryService } from 'src/app/service/history.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  input: string = '';
  result: string = '0';

  constructor(private history: HistoryService) { }
   pressNum(operand: string) {
    if (operand == ".") {
      if (this.input != "") {

        const lastNum = this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }
    if (operand == "0") {
      if (this.input == "") {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];

      console.log(PrevKey)
      if (PrevKey === '/') {
        return;
      }
    }

    this.input = this.input + operand



  }
  pressOperator(operator: string) {
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      return;
    }

    this.input = this.input + operator


  }
  allClear() {
    this.result = '0';
    this.input = '';
  }

  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input == "0") this.input = "";
  }
  getLastOperand() {
    let pos: number;
    console.log(this.input)
    pos = this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos = this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos = this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos = this.input.lastIndexOf("/")
    console.log('Last ' + this.input.substr(pos + 1))
    return this.input.substr(pos + 1)
  }
  calcAnswer() {
    let formula = this.input;

    let lastKey = formula[formula.length - 1];
    console.log(lastKey);
    if (lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }

    lastKey = formula[formula.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }

    console.log("Formula " + formula);
    this.result = eval(formula);

    const data: History = {
      expression: this.input,
      result: this.result
    }
    this.history.addHistory(data)

  }



}
